import express, { urlencoded } from 'express'
import session from 'express-session'
import passport from 'passport'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import cors from 'cors'

import connectDB from './src/config/db.js'

const app = express()
const PORT = process.env.PORT || 4000

const corsOptions = {
    origin: ["http://localhost:3001"],
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json({limit: "100mb"}))
app.use(urlencoded({limit: "100mb", extended: true}))
app.use(session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 60000 * 60
    }
}))


app.use(passport.initialize())
app.use(passport.session())
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "welcome to 2 factor authentication system 🧑‍💻"
    })
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.log(error.message)
})
