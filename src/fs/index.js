const filePath = './src/fs/data.json';
const fs = require("fs");

// Função para carregar dados do arquivo
const loadData = () => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return { users: [] }; // Se o arquivo não existir, retorna estrutura vazia
    }
};

// Função para salvar dados no arquivo
const saveData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

module.exports = {loadData, saveData};