const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const async = require("hbs/lib/async")
const model = require("./mongodb")

// Apontamento para o diretório dos templates
const templatePath = path.join(__dirname, '../templates')


//Conexão do Mongodb com os files hbs
app.use(express.json())
app.set("view engine","hbs") 
app.set("views",templatePath) 

//irá ajudar a pegar o mongodb data
app.use(express.urlencoded({extended:false}))

app.listen(3000,() =>{
    console.log("conexão estabelecida")
})


// Rotas
app.get("/", (req,res)=> {
    res.render("home")
})

app.get("/signup", (req,res)=> {
    res.render("signup")
})

app.get("/login", (req,res)=> {
    res.render("login")
})


// O uso do async ocorre por conta do uso do mongodb
// Rotas que utilizam metodo post para validar e inserir os usuarios no banco

app.post("/signup",async (req,res) =>{
    
const data = {
    name:req.body.name,
    password:req.body.password
}

try {
    await model.insertMany([data])
    console.log("Usuario cadastrado com sucesso.")
    res.render('home')
} catch (error) {
    console.error("Erro ao inserir dados no MongoDB:", error)
    // Lidar com o erro de inserção aqui, talvez renderizando uma página de erro.
}


})

app.post("/login",async (req,res) =>{
    
try{
    const verificaUsuario = await model.findOne({name: req.body.name})

    if(verificaUsuario.password === req.body.password){
        res.render('home')
    }
    else{
        res.send("Senha Incorreta")
    }
}
catch{
    res.send("Dados invalidos")
}

    })