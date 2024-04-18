import express from 'express'
import countriessData from "./data/countriesData.js";
import cors from "cors";

const app=express()

//app.use(express.static("public"));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : false}))


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