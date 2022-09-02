import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const CampaignSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: [true],
  },
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
  landing_pages: [
    {
      lander_angle: {
        type: String,
        required: [true, "Please provide landing page angle"],
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
      lander_url: {
        type: String,
        required: [true, "Please provide landing page angle"],
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
    },
  ],
  thank_you_page: {
    type: String,
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  offer_pages: [
    {
      offer_name: {
        type: String,
        required: [true, "Please provide offer name"],
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
      offer_url: {
        type: String,
        required: [true, "Please provide offer URL"],
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
      offer_network: {
        type: String,
        required: [true, "Please provide offer network"],
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
    },
  ],
  sequence_pages: [
    {
      sequence_page_name: {
        type: String,
        required: [true, "Please provide sequence page name"],
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
      sequence_page_url: {
        type: String,
        required: [true, "Please provide sequence page url"],
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
    },
  ],
  tracking_tokens: [
    {
      token_name: {
        type: String,
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
      token_string: {
        type: String,
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
      token_query: {
        type: String,
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
    },
  ],
});

export default mongoose.models.Campaign ||
  mongoose.model("Campaign", CampaignSchema);
