const express = require("express")
const cors = require("cors")
const router = require('./routes/Routes.js')

const PORT = 5000;

const app = express()

// cors setup
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use(express.json())

app.use(router)

app.listen(PORT, () => {
    console.log(`Back rodando na porta ${PORT}`)
})
