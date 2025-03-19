const { Router } = require("express");
const createAcessoController = require("./controllers/acessos/createAcessoController");
const deleteAcessoController = require("./controllers/acessos/deleteAcessoController");
const updateAcessoController = require("./controllers/acessos/updateAcessoController");
const findAcessoController = require("./controllers/acessos/findAcessoController");
const findManyAcessoController = require("./controllers/acessos/findManyAcessoController");
const loginController = require("./controllers/usuario/login");

const routes = Router();

routes.post("/acesso/create",createAcessoController.handle);
routes.post("/acesso/delete",deleteAcessoController.handle);
routes.post("/acesso/update",updateAcessoController.handle);
routes.post("/acesso/find",findAcessoController.handle);
routes.get("/acesso/findMany",findManyAcessoController.handle);
routes.post("/login",loginController.handle)

module.exports = routes;

