import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import categorieRouter from "./Routes/categorie.route.js"
import userRouter from "./Routes/user.route.js"
import cors from "cors"

dotenv.config()
const app = express();
//bodyParser Middelware
app.use(express.json());
//connexion a la base
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connexion a la base réussie");
}).catch(err=>{
    console.log('impossible de se connecter a la base de données',err);
    process.exit();
});
//var app=express();
//app.route('/Node').get(function(req,res){
//    res.send("tutorial on   Node");});
//app.route('/Node').get(function(req,res){
    //res.send("tutorial on Angular");});
app.get('/',function(req,res){
    res.send('bonjour');

});

app.use(cors())
app.use('/api/categories',categorieRouter)
app.use('/api/users',userRouter)





//var server=app.listen(3000,function(){});
app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port ${process.env.PORT}`);});