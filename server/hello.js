const http = require("http");
const cors = require('cors');

const host = 'localhost';
const port = 8000;

const produtos = JSON.stringify([
    {id: 1, nome: "Sabão Ariel", quantidade: 1,preco: 30},
    {id: 2,nome: "Sabão Omo",quantidade: 2,preco: 10},
]);

const listarProdutos = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader('Access-Control-Allow-Origin', '*')
    switch (req.url) {
        case "/produtos":
            res.writeHead(200);
            res.end(produtos);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
};

const server = http.createServer(listarProdutos);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});