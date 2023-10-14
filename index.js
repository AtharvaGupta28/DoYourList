import express from "express";
import bodyparser from "body-parser";

const app=express();
const port=3000;
var arr1=[];
var arr2=[];
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));
arr1=[];
    arr1.push("Finish module in development course");
    arr1.push("Give coding contest this weekend");
    arr1.push("Post projects on github by sunday");
arr2=[];
    arr2.push("Complete development course");
    arr2.push("Lookout for internships");
    arr2.push("Apply for driving license.");
app.get("/",(req,res)=>{
    
    res.render("index.ejs",{check : 0});
});
app.get("/weekly",(req,res)=>{
    res.render("index.ejs",{check : 1,tasks : arr1});
});
app.get("/long",(rew,res)=>{
    res.render("index.ejs",{check : 2,tasks : arr2});
});
app.post("/submit-1",(req,res)=>{
    arr1.push(req.body.add_task);
    res.render("index.ejs",{check : 1, tasks : arr1});
});
app.post("/submit-2",(req,res)=>{
    arr2.push(req.body.add_task);
    res.render("index.ejs",{check : 1, tasks : arr2});
});
app.delete("")
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
