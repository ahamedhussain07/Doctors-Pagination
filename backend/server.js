import express from "express";
import cors from "cors"

import db from "./connectDB.js";
import Doctor from "./module.js";

const app = express();

app.use(cors())

app.use(express.json());

app.get("/api/doctors", async (req, res) => {
  try {
    const { page = 0 } = req.query;

    const overallData = await Doctor.find();

    const data = await Doctor.find()
      .skip(page * 2)
      .limit(2);

    res
      .status(200)
      .json({ status: true, data, total_length: overallData.length });
  } catch (error) {
    res.status(500).json({ status: false, message: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("listening 5000");
});
