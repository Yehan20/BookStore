// Containes Crud Operations of the Books

//Import global packages
const jwt = require('jsonwebtoken');


const BookSchema = require('../model/books');


const viewBooks=  async(req,res)=>{
    const user = (req.user)
    try{
        const usersBooks = await BookSchema.findOne({userId:user._id})
        res.status(200).json(usersBooks)
    }catch(e){
        console.log(e)
        res.status(500).json({message:"Internal Server Error"})
    }

}

const addBook = async(req,res)=>{

    const {title,author,genre,publishedDate} = req.body;
    const user = req.user;

    const newBook={
       title,genre,author, publishedDate
    }
  

    //Adding a new Book to the array of the document of the user
    try{
      const updatedBook= await BookSchema.findOneAndUpdate(
            {userId:user._id},
            {$push:{books:newBook}},
            {new:true}
         )
      
        console.log(updatedBook);

      res.status(200).json(updatedBook)
    } catch(e){

     console.log(e)
      res.status(500).json({message:"Internal Server Error"})
    }

}

const updateBook = async(req,res)=>{
    const user = (req.user)
    //From the client
    const updatedBook = {
         newTitle:req.body.newTitle,
         newAuthor:req.body.newAuthor,
         newGenre:req.body.newGenre,
         newDate:req.body.newDate,
         id:req.body.id
    }
    console.log(updatedBook)
    try{
        const doc = await BookSchema.findOneAndUpdate(

            { userId:user._id},
            {$set:{'books.$[elem].title':updatedBook.newTitle,
                   'books.$[elem].author':updatedBook.newAuthor,
                   'books.$[elem].genre':updatedBook.newGenre,
                   'books.$[elem].publishedDate':updatedBook.newDate
            }},
            {
                new:true,
                arrayFilters:[{'elem._id':updatedBook.id}]
            }
            )

         res.status(200).json(doc)   
            
    }catch(e){
         res.status(500).json({message:"Internal Server Error"})
    }
}

const deleteBook = async(req,res)=>{
   //const userId  =req.user._id;
   const BookId = req.params.id;
   try{
    // we update and remove the Book
     const updatedBook = await BookSchema.findOneAndUpdate(
        {userId:req.user._id},
        {$pull:{books:{_id:BookId}}},
        {new:true},
        )
     console.log(updatedBook)   
     res.status(200).json(updatedBook);   
   }catch(e){
      res.status(500).json({message:'Internal Server Error'})
   }

}
//ddd


const BookController= {
    viewBooks,addBook,updateBook,deleteBook
}
module.exports = BookController;