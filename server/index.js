import express from 'express'

const app=express()

app.get('/', (request,response)=>{
    response.send('welcome to countries playlist')
})



app.listen(3000, () => console.log(`Server running on port 3000`))