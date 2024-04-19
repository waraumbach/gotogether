
import { Router } from 'express'
import Review from '../models/searchModel.js'
import Search from '../models/searchModel.js'
const reviewsRouter = Router()


searchsRouter.get('/searchs', async (req, res) => {
    try {
        const searchs = await Search.find().populate('userID')
        return res.json(searchs)
    }
    catch (err) {
        res.json(err)
    }
})

searchsRouter.get('/searchs/:searchID', async (req, res) => {
    const { searchID } = req.params
    try {
        const search = await Search.findOne({_id : searchID})
        return res.json(search)
    }
    catch (err) {
        res.json(err)
    }

})

searchsRouter.post('/searchs', async (req, res) => {
    try {
        const newSearch = await Search.create(req.body)
        return res.json(newSearch)
    }
    catch (err) {
        res.json(err)
    }
})


searchsRouter.delete('/searchs/deletesearch/:searchID', async (req, res) => {
    const { searchID } = req.params
    try {
        const deleteSearch = await Search.deleteOne({_id : searchID})

        return res.json('Search deleted')
    }
    catch (err) {
        res.json(err)
    }
})


export default searchsRouter