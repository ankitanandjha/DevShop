import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import productRoutes from './routes/productRoutes.js'
import userRouters from './routes/userRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())


app.get('/', (req,res) => {
    res.send("Server is running")
}) 


app.use('/api/products', productRoutes)
app.use('/api/users', userRouters)

// app.use(notFound)
// app.use(errorHandler)

const PORT = process.env.PORT || 5000


const connectServer = async (PORT) => {
    await connectDB()

    app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`.yellow.bold ))
}

connectServer(PORT)
