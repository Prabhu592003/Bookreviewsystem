const express = require("express");
let app = express();
const mongoose = require("mongoose");
let Review = require("./reviewModel");
let signup = require("./Signup")
let cors = require('cors');

// Middlewares
// To get request body and converts to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.post("/review/create", async (req, res) => {
  // let { posted_by, book_title, category,rating, review } = req.body;
  let {title,rating,review,category} =req.body;
  if(!title) {
      return res.status(400).send("Book title can't be empty");
  }
  let newReview = new Review({  title,category, review,rating });
  try {
    await newReview.save();
  } catch (e) {
      return res.status(500).send("Review can't be created");
  }
  return res.status(201).send("Review created");
});

app.post("/signup/create",async(req,res)=>{
  let {username,password,email} = req.body;
  let Sign = new signup({username,password,email});
  try{
    await Sign.save();
  }catch(e){
    return res.status(500).send("cant sign up")
  }
  return res.status(201).send("Sign up successfull")
})



app.get("/review/get", async (req, res) => {
  const { title } = req.query;
  if (!title) {
    return res.status(400).send("Book title is required");
  }
  try {
    const regex = new RegExp(title, "i");
    const getReviews = await Review.find({ title: regex });
    return res.status(200).send(getReviews);
  } catch (error) {
    return res.status(500).send("Failed to fetch reviews");
  }
});

mongoose.connect("mongodb://127.0.0.1:27017/readrater").then(() => {
  console.log("Connected to DB");
});

app.listen(5000, () => {
  
  console.log("Server listening at 5000");
});












// function searchByTitle(key){
//   const match=Review.filter(book=>{
//     const words=book.title.split(' ')
//     return words.some(word=>word.toLowerCase()===key.toLowerCase())
//   })
//   return match
// }

// app.get("/review/get",async (req,res)=>{
//   let {title}=req.query
//   if(!title){
//       return res.status(400) .send("Book not found")
//   }
//   let getreview = await searchByTitle(title)
//   return res.status(200).send(getreview)
// })

// app.get("/review/get",async (req,res)=>{
//     let {title}=req.query
//     if(!title){
//         return res.status(400) .send("Book not found")
//     }
//     let getreview = await Review.find({title})
//     return res.status(200).send(getreview)
//   })
