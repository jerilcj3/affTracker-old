import dbConnect from "../../config/dbConnect";
import nc from "next-connect";
import Pet from "../../models/Pet";
import {showPets, insertPets} from '../../controllers/petController'

dbConnect();

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get(showPets)
  .post(insertPets);
 

export default handler;
