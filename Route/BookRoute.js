const route = require('express').Router();
const BookDB = require('../model/BooksDB');

// insert Route

route.post('/insert', async (req,res)=>{
     const book = new BookDB({
         Name : req.body.Name,
         Category : req.body.Category,
         Price : req.body.Price,
         Author : req.body.Author
     })
  try{
   const saveData = await Book.save();   
   res.send(saveData);
  }
  catch(err){
      console.log(err.msg);
  }   
})

// update Book

route.post('/update', async(req,res)=>{
    const id = req.body.id;
    try{
    const updateData = await BookDB.findByIdAndUpdate(id,req.body);
    }
    catch(err){
      console.log(err.msg);
    }
})

// delete Book

route.delete('/delete',(req,res)=>{
        const id = req.body.id;
    try{
        const deleteData = await BookDB.findByIdAndDelete(id);
    }catch(err){
        console.log(err.msg);
    }
})

