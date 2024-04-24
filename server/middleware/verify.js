import jwt from 'jsonwebtoken'


const verify = (req, res, next) => {
    // check if the token is present in the header
    const token = req.header('auth-token')
    if(!token) return res.status(400).send('Access denied')
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    }
    catch(err){
        return res.json(err)
    }

}

export default verify