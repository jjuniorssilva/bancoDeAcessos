const { loadData, saveData } = require("../../../fs");

module.exports = {
    async execute(params) {
      const { acessoId } = params;
      
      try {
        const db = loadData();

        const acesso = db.acessos.find((u) => u.id == acessoId);
        
        //caso não tenha encontrado o acesso
        if (!acesso) {
            throw Object.assign(new Error("error: acesso não foi encontrado!"), {
                status: 404,
              });
        }
        //caso tenha encontrado o acesso
        return acesso;
          
      } catch (error) {
        console.error("Erro: ", error.message);
        throw error;
      }
    },
  };
  