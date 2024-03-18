const express = require("express")
const app = express()

app.use(express.static(__dirname+'/node_modules/bootstrap/dist'))

const handlebars = require("express-handlebars").engine

var porta = 8081

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req, res){
    res.render("index")
})

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/cadastrar", function(req, res){
    res.render("cadastrar")
})
