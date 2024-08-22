const mongoose = require('mongoose');

const BooksSchema  = new mongoose.Schema({
       title:String,
       genre:String,
       author:String,
       publishedDate:String,
})

const UserSchema = new mongoose.Schema({
    userId:{
         type:String,
         required:true
    },
    userEmail:{
        type:String,
        required:true,
        lowercase:true,
    },
    books:{
        type:[BooksSchema],
        required:true,
    }


})


module.exports = mongoose.model("books",UserSchema)