const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next) => {
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader) {
            return res.status(401).json({
                message : "token missing",
                success : false
            })
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.user = decoded

        next();

    } catch (error) {
        console.log(error);
        

        return res.status(401).json({
            message : error.message,
            success : false
        })
    }
}

module.exports = {authMiddleware}