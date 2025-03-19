const { loadData, saveData } = require("../../../fs");

module.exports = {
    async execute(params) {
      const { user, password} = params;
      
      try {
        const db = loadData();

        const usuario = db.users.find((u) => u.user == user && u.password == password);
        // caso nãohaja esse usuário
        if (!usuario) {
            throw Object.assign(new Error("Usuário ou senha inválido!"), {
                status: 401,
              });
        }else{
            return usuario;
        }
      
      } catch (error) {
        console.error("Erro: ", error.message);
        throw error;
      }
    },
  };
  