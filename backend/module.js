import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
});

const Doctor = mongoose.model("doctors", doctorSchema);

export default Doctor;
