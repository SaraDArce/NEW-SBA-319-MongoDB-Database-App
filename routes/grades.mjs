import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

//BASE URL localhost:5050/grades

//Get a single grade
router.get("/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Grade not found").status(404);
  else res.send(result).status(200);
});

// Get a student's grade
router.get("/student/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { student_id: Number(req.params.id) };
  let result = await collection.find(query).toArray();

  if (!result) res.send("Grade not found").status(404);
  else res.send(result).status(200);
});

// Get a class' grade
router.get("/class/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { class_id: Number(req.params.id) };
  let result = await collection.find(query).toArray();

  if (!result) res.send("Class grade not found").status(404);
  else res.send(result).status(200);
});

export default router;
