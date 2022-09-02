import Campaign from "../models/Campaign";
import { v4 as uuidv4 } from "uuid";
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
  const uuid = uuidv4();
  const created_at = new Date();

  //class which generates campaign URL
  const apiFeatures = new APIFeatures(
    uuid,
    req.body.tracking_tokens
  ).generateCampaignURL();

  const URL = apiFeatures.URL;

  console.log(URL);

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
    }); /* create a new model in the database */
    res.status(201).json({ success: true, data: campaign });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export { showAllCampaigns, createACampaign };
