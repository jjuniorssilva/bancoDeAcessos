const model = require("../../../models/acessos/findManyAcessos");
const logger = require("../../../custom/logger");

module.exports = {
  async handle(req, res) {
    try {
      const params = req.body;
      const response = await model.execute(params);
      logger.info("found multiple acess successfully");

      return res.status(200).json(response);
    } catch (error) {
      if (!error.path) {
        error.path = "/controller/deleteAcesso";
      }
      return res.status(error.status||500).json({erro:error.message});
    }
  },
};
