import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.status(200).json({
        message: "welcome to 2 factor authentication system 🧑‍💻"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})