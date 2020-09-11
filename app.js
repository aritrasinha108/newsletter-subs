const express=require('express');
const path =require('path');
const app=express();
app.use(express.json());//express.json() and bodyParser.json() dose the same job
// app.use(bodyParser.json());
const mailRouter=require("./routes/mailRouter");
app.set("views",path.join(__dirname,'views'))
app.use('/static',express.static('static'))
app.set("view engine","pug");


mongoose.connect(process.env.MONGOURI,
    {
        dbName:"newsletter",//giving the database name 
        user:process.env.USER,
        pass:process.env.PASS,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
    .then(()=>{
        console.log("Mongodb connected...");
    })
    .catch(()=>{
        console.log("Connection failed...")
    });

app.use('/',mailRouter);


app.listen(80 || process.env.PORT,()=>{
console.log("The server started running on the port 80")});