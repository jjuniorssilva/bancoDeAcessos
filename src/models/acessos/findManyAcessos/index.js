const { loadData, saveData } = require("../../../fs");

module.exports = {
    async execute() {
     
      try {
        const db = loadData();
        return db.acessos;  
      } catch (error) {
        console.error("Erro: ", error.message);
        throw error;
      }
    },
  };
  