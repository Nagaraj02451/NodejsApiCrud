const express = require("express")
const Router = express.Router()
const crud = require("./collections ")

Router.post("/Create" , crud.PostCreate)
Router.get("/View" , crud.GetView)
Router.put("/Update/:id" , crud.Updateput)
Router.delete("/Delete/:id" , crud.deletedatascheema)
Router.post("/Loginpage" , crud.LoginPage)

module.exports = Router
