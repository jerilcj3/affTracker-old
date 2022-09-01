import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const CampaignSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },  
})

export default mongoose.models.Campaign || mongoose.model('Campaign', CampaignSchema)