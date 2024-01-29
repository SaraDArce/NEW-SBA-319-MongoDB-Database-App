import express from "express";

const router = express.Router();

//BASE URL localhost:5050/posts

//Get one post
router.get("/:id", async (req, res) => {
  let collection = await db.collection("posts");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Post not found").status(404);
  else res.send(result).status(200);
});

//Get one post
router.get("/:id", async (req, res) => {
  let collection = await db.collection("posts");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Post not found").status(404);
  else res.send(result).status(200);
});

export default router;
