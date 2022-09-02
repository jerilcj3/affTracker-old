import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const CampaignSchema = new mongoose.Schema({
  campaign_name: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name for this Campaign."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  created_at: { type: Date, required: [true, "Created Date Required"] },
  ad_angle: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide an angle for this campaign"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  traffic_source: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide the traffic source"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
});

export default mongoose.models.Campaign ||
  mongoose.model("Campaign", CampaignSchema);
