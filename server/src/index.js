const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require("express");
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//req = informações de quem faz a requisição (credencial)
//res = informações de quem recebe a requisição (resposta)

app.get("/", (req, res) => {
  console.log("rota get");
  res.send({
    message: "Bem vindo ao GET!",
  });
});

app.get('/users/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(404).json({ success: false, message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao buscar usuário.' });
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Erro ao cadastrar usuário.' });
  }
});

app.put("/", (req, res) => {
  console.log("rota put");
  res.send({
    message: "Bem vindo ao PUT!",
  });
});

app.delete("/", (req, res) => {
  console.log("rota delete");
  res.send({
    message: "Bem vindo ao DELETE!",
  });
});