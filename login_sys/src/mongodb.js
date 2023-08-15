const mongoose = require('mongoose');

// URL da conexão com o banco de dados
const URL = "mongodb+srv://Root:1234@cluster0.qnbvwjt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL).then(() => {
     console.log("Iniciando o servidor")
}).catch((err) => console.log(err))

const LoginSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },

    password:{
        type : String,
        required : true
    }

})

const model = mongoose.model("model1",LoginSchema)

// Exporte o modelo e a conexão como um objeto
module.exports = model