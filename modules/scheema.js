const mongoose = require("mongoose")
const Scheemalist = mongoose.Schema({
    Name : {
        type : String,
        required : true,
        max : 25,
        trim : true,
        min : 10
    },
    Email : {
        type : String,
        required : true,
        max : 25,
        trim : true,
        min : 10
    },
    Department : {
        type : String,
        required : true,
        max : 25,
        trim : true,
        min : 10
    },
    Password : {
        type : String,
        required : true,
        max : 25,
        trim : true,
        min : 10
    }
})

module.exports = mongoose.model("Collections" , Scheemalist)