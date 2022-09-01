import Pet from "../models/Pet";

const showPets = async (req, res) => {
  try {
    const pets = await Pet.find({}); /* find all the data in our database */
    res.status(200).json({ success: true, data: pets });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

const insertPets = async (req, res) => {
  try {
    const pet = await Pet.create(
      req.body
    ); /* create a new model in the database */
    res.status(201).json({ success: true, data: pet });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export {
    showPets, insertPets
}
