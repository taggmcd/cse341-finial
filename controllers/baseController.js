// Retrieve and send all data
const getAndSendAll = async (req, res, model) => {
    try {
      const data = await model.find({});
      if (data.length > 0) {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(data);
      } else {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send({ message: `Could not find any instance of these items.`});
      }
  
    } catch (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ message: `Could not retrieve instance of instance of these items from database` });
    }
  };

// Retrieve and send only one instance of data by id
const getAndSendOne = async (req, res, model) => {
    const id = req.params.id;
    try {
      const data = await model.findById(id).exec();
      if (data) {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(data);
      } else {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send({ message: `Could not find the requested item. Id: ${id}` });
      }
    } catch (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ message: `Could not retrieve the requested item. Id: ${id}` });
    }
  };

module.exports = { 
    getAndSendAll,
    getAndSendOne
}
  