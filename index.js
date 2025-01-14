import express from "express"
import bodyParser from "body-parser"
const port=3000;
const app=express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var blogs=[];
function blog(author,title,text){
    this.author=author;
    this.title=title;
    this.text=text;
}
app.get("/",(req,res)=>{
    res.render("home.ejs",{blogs:blogs});
})
app.get("/create",(req,res)=>{
    res.render("creation.ejs");
});

app.post("/create/submit",(req,res)=>{
    var newBlog=new blog(req.body.author,req.body.title,req.body.text);
    blogs.push(newBlog);
    console.log(blogs.slice(-1));
    res.redirect("/");
});

app.listen(port, (req,res)=>{
    console.log(`listening on port ${port}`);
});