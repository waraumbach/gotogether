

import mongoose, { Schema } from 'mongoose'


const reviewSchema = new Schema({
   id: Number,
  name: String,
  region: String,
  reviews:String,
  image:String,
    
})


const Review = mongoose.model('Review', reviewSchema)


export default Review