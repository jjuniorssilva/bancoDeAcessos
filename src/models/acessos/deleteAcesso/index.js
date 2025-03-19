const { loadData, saveData } = require("../../../fs");

module.exports = {
    async execute(params) {
      const { acessoId } = params;
      
      try {
        const db = loadData();
        const index = db.acessos.findIndex((u) => u.id == acessoId);
        //caso não tenha encontrado o acesso
        if (index === -1) {
            throw Object.assign(new Error("Acesso não foi encontrado!"), {
                status: 404,
              });
        }
        //caso tenha encontrado o acesso
        const filteredUsers = db.acessos.filter((u) => u.id != acessoId);
        db.acessos = filteredUsers;
        saveData(db);
            
    
        return acessoId;
      } catch (error) {
        console.error("Erro: ", error.message);
        throw error;
      }
    },
  };
  