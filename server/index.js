import express from 'express'
import countriesData from "./data/countriesData.js";
import cors from "cors";
import mongoose from 'mongoose'
import 'dotenv/config'
//import authRouter from './routes/authRouter.js';
//import usersRouter from './routes/usersRouter.js'
import multer from 'multer';
import User from './models/userModel.js';
//import path from 'path'



//import searchsRouter from './routes/searchsRouter.js';
//import searchsRouter from './routes/searchsRouter.js';
//import reviewsRouter from './routes/reviewsRouter.js';
//import searchsRouter from './routes/searchsRouter.js';


const app=express()
// 1.access to localhost (httplocalhost) &postman 
// GET : read the data
// Post : create the data
// Put : update the data
// Delete : delete the data
// Those verbs or actions create what we all a CRUD : create/read/update/delete the data
app.use(cors());
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
//app.use('/api',reviewRouter,searchsRouter)
//app.use(express.Router)



mongoose.connect(process.env.MONGO_URI)

const storage = multer.diskStorage({
  destination: function(req, file,cb){
    cd(null, file.fieldname +'_' + Date.now()+'.' +file.originalname.split('.').pop())
  }
})
const upload = multer({storage})
app.post('/user',upload.single('image'), (req,res)=>{
  const user = new User({
    name: req.body.name,
    image:'/public/images/' + req.file.filename,
    email:req.body.email
  })
  user.save()
return res.status(201).send('User created')
})

app.get('/public')




app.get('/', (request,response)=>{
    response.send('welcome to countries playlist')
})
app.get("/countries", (req, res) => {
  res.json(countriesData);
});
//access to data to id
app.get("/countries/:id", (req, res) => {
  let { id } = req.params;
  const country = countrysData.find(
    (country) => country.id === parseInt(id)
  );
  res.json(country);
});
app.get("/countries/name/:name", (req, res) => {
  let { name } = req.params;

  const country = countriesData.find(
    (country) => country.name === name
  );
  res.json(country);
});


app.listen(8000, () => console.log(`Server running on port 8000`))