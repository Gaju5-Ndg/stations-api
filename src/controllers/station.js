import Station from "../models/station"
class stationController{
static createStation=async (request, response) => {
    const station = new Station(request.body);
    try {
      await station.save();
      response.status(200).send(station);
    } catch (error) {
      response.status(500).send({message:error});
    }
  }

  static getAll=async (request, response) => {   
    try {
      const station =await Station.find();
      if (!station) {
        return response.status(404).send({message:"No station Found"});
      }
      response.send(station);
    } catch (e) {
      response.send({error:e});
    }
  }


  static getStationById=async (request, response) => {   
    try {
      const station =await Station.findById(request.params.id);
        return response.status(200).send(station);
    } catch (e) {
      response.send({error:e});
    }
  }
  static updateStation=async (request, response) => {
    const station = await Station.findById(request.params.id);
    const updates = Object.keys(request.body);
    const allowedUpdates = [
      "name",
      "location",
    ];
    const isValidUpdate = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    try {
      updates.forEach((update) => (station[update] = request.body[update]));
      await station.save();
      response.status(200).send({message:'station updated successfully'});
    } catch (e) {
      response.status(500).send({error:e});
    }
  }
  
  static deleteStation=async (request, response) => {
    try {
      const station = await Station.findById(request.params.id);
          await station.remove();
          response.status(400).send({message:'student removed!'});
        }
    catch (e) {
      response.status(500).send({error:e});
    }
  }

}
export default stationController