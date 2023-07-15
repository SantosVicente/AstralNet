const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://SantosVicente:3azzkOs2HE7n633n@cluster0.lg5qnt2.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado ao MongoDB Atlas");
  } catch (error) {
    console.error(`Erro: ${error}`);
  }
}

module.exports = main;