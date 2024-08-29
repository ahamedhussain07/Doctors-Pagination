import mongoose from "mongoose";

const db = mongoose
  .connect("mongodb://127.0.0.1:27017/hospital")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((e) => {
    console.log(e);
  });

export default db;
