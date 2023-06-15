const express =  require("express")
const mongoose =  require("mongoose")
const Router = require("./modules/router")
const Cookies = require("cookie-parser")
const multer = require("multer")
require("dotenv").config()
const app =  express()
app.use(express.json())
app.use(Cookies())

app.set("view engine" , "ejs")

app.get("/" , (req , res)=>{
    res.render('Home' , {
        title : "Gud guy"
    })
})

// mongoose.connect("mongodb+srv://surya024517:ZL2UrYXyjjFjVoUj@cluster0.v0ruxh4.mongodb.net/")
// .then(()=>{
//     console.log("Database is connected");
// })
// .catch(()=>{
//     console.log("Database is not connected");
// })

// app.use("/Api" , Router)

// const multerdata = multer.diskStorage({
//     destination : (req , file , cb)=>{
//       cb(null , "uploads")
//     },
//     filename :(req , file , cb)=>{
//       cb(null , Date.now() + " " + file.originalname)
//     }
// })

// const uploads = multer({
//     storage : multerdata,

// })

// app.post("/Multer" , uploads.single("First") , (req , res )=>{
//     try{
//         res.json("File upload successfully")
//     }catch{
//         res.json("Error")
//     }
// })

// app.use((err , req , res , next)=>{
//        const ErrorCode = err.status || 500
//        const ErrorMessage = err.message || "Wrong Error"

//        return res.status(ErrorCode).json({Code : ErrorCode , Message :ErrorMessage})
// })


app.listen(process.env.PORT , ()=>{ 
    console.log(process.env.PORT);
})