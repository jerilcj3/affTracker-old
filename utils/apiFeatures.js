//search functionality

//filter functionality

//pagination functionality

//generateCurrentDate functionality

//generate UUID functionality

//generateCampaignURL functionality

import { v4 as uuidv4 } from "uuid";
class APIFeatures {
  constructor(tracking_tokens, hostName) {
    this.uuid = uuidv4();
    this.tracking_tokens = tracking_tokens;
    this.hostName = hostName;
  }

  //generates the now date
  generateCurrentDate() {
    return new Date();
  }

  //generate unique UUID
  generateUUID() {
    return this.uuid;
  }

  //generates a campaign URL with tracking tokens and uuid
  generateCampaignURL() {
    let campaign_url;

    let tokens = this.tracking_tokens.map((token) => {
      return `${token.token_string}=${token.token_query}`;
    });

    tokens = tokens.join("&");
    campaign_url = `http://${this.hostName}/api/tracker?id=${this.uuid}&${tokens}`;
    return campaign_url;
  }
}

export default APIFeatures;
