import Campaign from "../models/Campaign";

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
  try {
    const { campaign_name, ad_angle, traffic_source } = req.body;
    const created_at = new Date();

    const campaign = await Campaign.create({
      campaign_name,
      created_at,
      ad_angle,
      traffic_source,
    }); /* create a new model in the database */
    res.status(201).json({ success: true, data: campaign });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export { showAllCampaigns, createACampaign };
