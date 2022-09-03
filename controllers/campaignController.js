import Campaign from "../models/Campaign";
import APIFeatures from "../utils/apiFeatures";

const showAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find(
      {}
    ); /* find all the data in our database */
    res.status(200).json({ success: true, data: campaigns });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

const createACampaign = async (req, res) => {
  //class which generates campaign URL
  //params passed - tracking tokens and hostname from http body
  const apiFeatures = new APIFeatures(
    req.body.tracking_tokens,
    req.headers.host
  );

  const campaign_url = apiFeatures.generateCampaignURL();
  const uuid = apiFeatures.generateUUID();
  const created_at = apiFeatures.generateCurrentDate();

  try {
    //extract from http body
    const {
      campaign_name,
      ad_angle,
      traffic_source,
      landing_pages,
      thank_you_page,
      offer_pages,
      sequence_pages,
      tracking_tokens,
    } = req.body;

    //insert values to mongodb
    const campaign = await Campaign.create({
      uuid,
      campaign_name,
      created_at,
      ad_angle,
      traffic_source,
      landing_pages,
      thank_you_page,
      offer_pages,
      sequence_pages,
      tracking_tokens,
      campaign_url,
    }); /* create a new model in the database */
    res.status(201).json({ success: true, data: campaign });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export { showAllCampaigns, createACampaign };
