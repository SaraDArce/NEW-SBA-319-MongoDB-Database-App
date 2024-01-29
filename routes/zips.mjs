import express from "express";

const router = express.Router();

//BASE URL localhost:5050/zips

//Get one zipline
router.get("/:id", async (req, res) => {
  let collection = await db.collection("zips");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Zipline not found").status(404);
  else res.send(result).status(200);
});

export default router;
