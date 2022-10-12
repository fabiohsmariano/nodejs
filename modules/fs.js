const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }

//   console.log("Pasta criada com sucesso");
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "/teste.txt"),
  "Hello NODE",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso");

    // Adicionar conteúdo ao arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "teste.txt"),
      "Hello WORLD",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Conteúdo adicionado com sucesso");
      }
    );
    // Ler arquivos
    fs.readFile(
      path.join(__dirname, "/test", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
