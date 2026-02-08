import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import noteRoutes from './routes/noteRoutes.js'
import connectDb from './config/mongoDB.js'
import rateLimiter from './middlewares/rateLimiter.js'


const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000

// middlewares
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(express.json())
app.use(rateLimiter)


// Api endpoints for notes
app.use('/api/notes', noteRoutes)

app.get("/", (req, res) =>{
    res.send("API IS WORKING WELL")
})




connectDb().then(() =>{

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)
    )
})
