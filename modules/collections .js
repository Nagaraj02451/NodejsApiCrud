const Scheemalist = require("./scheema")
const jwt = require("jsonwebtoken")
const bcypt = require("bcrypt")
const Errorhandling = require("./Errorhandling")

const PostCreate = async(req , res , next)=>{
    const Passwordbcrypt = await bcypt.hash(req.body.Password , 7)
    const ScheemaData = new Scheemalist({
        ...req.body , Password : Passwordbcrypt
    })
    const Emailid = await Scheemalist.findOne({Email : req.body.Email})
    // if(Emailid) return res.json({Message : "Email is already exits"})
    if(Emailid) return next(Errorhandling(500 , "List"))
    const ListOFscheema = await ScheemaData.save()
    res.json(ListOFscheema)
}

const LoginPage = async (req , res)=>{
    const EmailLogin = await Scheemalist.findOne({Email : req.body.Email})
    if(!EmailLogin) return res.json({Message : "Email is already exits"})
    const Password = await bcypt.compare(req.body.Password , EmailLogin.Password)
    if(!Password) return res.json({Message  :"Wrong password"})
    const token = await jwt.sign({id : EmailLogin._id} , "Secret")
    // res.json(token)
    res.cookie("cookies" , token , {
        httponly : true
    }).status(200).json("Stored")
}

const GetView = async(req , res)=>{
    const scheemaview = await Scheemalist.find()
    res.json(scheemaview)
}

const Updateput = async(req , res)=>{
    const Updatedata = await Scheemalist.findByIdAndUpdate(req.params.id  ,{$set : req.body} , {new : true})
    res.json(Updatedata)
}

const deletedatascheema = async(req , res)=>{
    const deletedata = await Scheemalist.findByIdAndDelete(req.params.id)
    res.json(deletedata)
}

const crud = {
    PostCreate,
    GetView,
    Updateput,
    deletedatascheema,
    LoginPage
}

module.exports = crud