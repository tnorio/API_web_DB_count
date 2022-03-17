var express = require("express"); // framework
var mysql = require("mysql"); // querys
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs"); // ejs == embedded JS, ele pertime inserir codigos JS no HTML
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// conectar DB
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

/// FIND USERS IN DATABASE
// find count of users in DB , respond with that count
var b_txt = "We are 100% not a cult";
app.get("/", function(req, res){
    // Find count of users in DB
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(err, results){
        if(err) throw err;
        var count = results[0].count;
        res.render("home", {count: count, bottom_txt:b_txt});
    });
	
});

// envia o email do formulario HTML para o DB
app.post('/register', function(req,res){
	var person = {email:req.body.email};
	console.log("caiu no console", person)
	try{
		if (person.email.includes("@")) {
			connection.query("INSERT INTO users SET ?", person, function(err, result) {
				if (err) throw err;
 			console.log("erro = ", err);
 			console.log("result= ",result);
 			res.redirect("/");
			});
		} else{
			console.log("CAIU NO ELSE")
			res.send("EMAIL INVALIDO")
		}
	} catch(err){
		console.log("CAIU NO CATCH", err)
		return res.send("CAIU NO CATCH")
	}
	
			
});

// ABRIR O SERVIDOR PARA REQUESTS
app.listen(3000, function(){ // abre o servidor na porta 3000
	console.log("SERVER RUNING 3000");
});


//hard coded examples
app.get("/home",function(req,res){
	console.log("GOT A REQUEST") // printa no console
	res.send("YOU FOUND TNORIO HOME PAGE") // aparece na pagina
})

// not hardcoded

app.get("/random_num", function(req, res){
	console.log("GOT A R_NUM REQUEST")
 var num = Math.floor((Math.random() * 10) + 1);
 res.send("Your lucky number is " + num);
});

