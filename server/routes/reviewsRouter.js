

import { Router } from 'express'
import Review from '../models/reviewModel.js'


const reviewsRouter = Router()


reviewsRouter.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find().populate('userID')
        return res.json(reviews)
    }
    catch (err) {
        res.json(err)
    }
})

reviewsRouter.get('/reviews/:reviewID', async (req, res) => {
    const { reviewID } = req.params
    try {
        const review = await Review.findOne({_id : reviewID})
        return res.json(review)
    }
    catch (err) {
        res.json(err)
    }

})

reviewsRouter.post('/reviews', async (req, res) => {
    try {
        const newReview = await Review.create(req.body)
        return res.json(newReview)
    }
    catch (err) {
        res.json(err)
    }
})


reviewsRouter.delete('/reviews/:reviewID', async (req, res) => {
    console.log(req.params.reviewID)
    try {
        //const deletedReview = await Review.deleteOne({_id : req.params.reviewID})

        //return res.json('Review deleted')
    }
    catch (err) {
        res.json(err)
    }
})


export default reviewsRouter