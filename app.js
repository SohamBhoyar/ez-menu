const express = require("express");
const app = express();
const path = require("path");
const menuModel = require("./model/menu")

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async function(req, res){
    let menu  = await menuModel.find();
    res.render("index", {menu });
})
app.get("/admin", async function(req, res){
    res.render("dashboard");
})

app.post("/create", async function(req, res){
    let {name, category, subcategory, price, img} = req.body;
    let createdmenu = await menuModel.create({
           name, category, subcategory, price, img
        });
        console.log(req.body)
        res.redirect("/admin");
})

app.listen("3000", function(err){
    console.log("server running")
})