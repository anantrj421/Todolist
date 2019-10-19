//jshint esversion:6

//Database connectivity part
const mysql = require('mysql');
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    charset  :'UTF8',
    port     :'3306',
    database :'animal_species_repository'
});
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});


const bodyParser = require("body-parser");
const app = express();
var items=["Buy food",
  "Cook food",
  "Eat food"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", function(req, res){
    var dt = new Date();
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var dayn=dt.toLocaleDateString("hi-IN", options);
    res.render("list",{day:dayn, newi:items});
});
app.post("/",function(req,res){
    var i1=req.body.t1;
    items.push(i1);
    res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
