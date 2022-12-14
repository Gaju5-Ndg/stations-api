import mongoose from "mongoose";

const stationSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    location: {
      type: String,
    }
  },
  { timestamps: true }
);

const Station = mongoose.model("station", stationSchema);
export default Station;
