//search functionality

//filter functionality

//pagination functionality

//generateCampaignURL functionality

class APIFeatures {
  constructor(uuid, tracking_tokens) {
    this.uuid = uuid;
    this.tracking_tokens = tracking_tokens;
  }

  //generates a campaign URL with tracking tokens and uuid
  generateCampaignURL() {
    //console.log(this.uuid);
    //console.log(this.tracking_tokens);
    this.URL = "http://google.com"
    return this;
  }
}

export default APIFeatures;
