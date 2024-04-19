import express from 'express'
import countriessData from "./data/countriesData.js";
import cors from "cors";
//const URI =('mongodb+srv://Wara:KlLfg73LvsoaRfvS@cluster0.gobenur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
const app=express()
// 1.access to localhost (httplocalhost) &postman 
// GET : read the data
// Post : create the data
// Put : update the data
// Delete : delete the data
// Those verbs or actions create what we all a CRUD : create/read/update/delete the data
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : false}))


//mongoose.connect(URI)


app.get('/', (request,response)=>{
    response.send('welcome to countries playlist')
})
app.get("/countriesData", (req, res) => {
  res.json(countriessData);
});
//access to data to id
app.get("/countries/:id", (req, res) => {
  let { id } = req.params;
  const country = countrysData.find(
    (country) => country.id === parseInt(id)
  );
  res.json(country);
});


app.listen(3000, () => console.log(`Server running on port 3000`))