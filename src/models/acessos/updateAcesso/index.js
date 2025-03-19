const { loadData, saveData } = require("../../../fs");

module.exports = {
    async execute(params) {
      const acesso = params;
      console.log(acesso);
      
      try {
        const db = loadData();

        const index = db?.acessos?.findIndex((u) => u.id == acesso.id);
        //caso não tenha encontrado o acesso
        if (index === -1) {
            throw Object.assign(new Error("error: acesso não foi encontrado!"), {
                status: 404,
              });
        }
        //caso tenha encontrado o acesso
        db.acessos = db.acessos.map((u) => {
            if(u.id==acesso.id)return {...u,...acesso,updateAt: new Date()}
            return u;
        });
        saveData(db);
        return db.acessos[index];
          
      } catch (error) {
        console.error("Erro: ", error.message);
        throw error;
      }
    },
  };
  