const express = require("express");
const router = express.Router();

router.get('/data/test', (req, res) => {
    res.send("data route working")
})
router.post('/data', (req, res) => {
    const { income, essentials, nonEssentials } = req.body
    console.log(`Renda ${JSON.stringify(income)}`)
    console.log(`Gastos Essenciais ${JSON.stringify(essentials)}`)
    console.log(`Gastos não Essenciais ${JSON.stringify(nonEssentials)}`)
    res.json({
        message: "ok",
        data: req.body
    })
})

module.exports = router;