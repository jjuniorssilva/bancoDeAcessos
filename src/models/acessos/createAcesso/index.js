const { loadData, saveData } = require("../../../fs");
const crypto = require("crypto");

function gerarHash(texto) {
    return crypto.createHash("sha256").update(String(texto)).digest("hex"); // Garante que o texto seja string
}

module.exports = {
    async execute(params) {
        try {
            const acesso  = params;

            if (!acesso) {
                throw Object.assign(new Error("Campo 'novoAcesso' é inválido!"), {
                    status: 400, // 
                });
            }

            const db = loadData();
            db.acessos = db.acessos || []; // Garante que a propriedade `acessos` exista
            delete acesso.id; // Garante que o ID não seja informado pelo cliente
            const newAcess = { id: gerarHash(Date.now().toString()), ...acesso,  createAt: new Date(), updateAt:null };
            db.acessos.push(newAcess);
           
            saveData(db);

            return newAcess;
        } catch (error) {
            error.path = "/models/acesso/createAcesso";
            throw error;
        }
    },
};
