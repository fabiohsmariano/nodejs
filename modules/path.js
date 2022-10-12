const path = require("path");

// Basename
console.log(path.basename(__filename));

// Diretororio
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar um objeto path
console.log(path.parse(__filename));

// Junte vários caminhos de arquivo
console.log(path.join(__dirname, "teste", "teste.html"));
