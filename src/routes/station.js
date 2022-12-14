import express from "express";
import stationController from "../controllers/station";

const stationRouter = express.Router();

stationRouter.get("/", stationController.getAll);
stationRouter.post("/station/create",stationController.createStation);
stationRouter.get("/station/single/:id", stationController.getStationById);
stationRouter.patch("/station/update/:id", stationController.updateStation);
stationRouter.delete("/station/delete/:id",stationController.deleteStation);

export default stationRouter;
