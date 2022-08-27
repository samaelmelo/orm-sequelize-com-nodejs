import express from 'express'
import bodyParser from 'body-parser'


const app = express()


app.use(bodyParser.json());

const port = 3000;

app.get('/teste', (request, response) => response
  .status(200)
  .send({mensagem: 'Boas vindas a API'}) 
);

app.listen(port, () => console.log('Servidor rodando na porta ', port,));


export default app;