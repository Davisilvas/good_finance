const express = require("express");
const router = express.Router();


const { parseAllToFloat, sumAllValues, validateObj, calcPercentage } = require('../controllers/DataController')

router.get('/data/test', (req, res) => {
    res.send("data route working")
})
router.post('/data', (req, res) => {
    const { income, essentials, nonEssentials } = req.body
    const essentialsPercentage = calcPercentage(essentials, income)
    const nonEssentialsPercentage = calcPercentage(nonEssentials, income)
    console.log(`Essentials percentage ${essentialsPercentage} \nNon Essentials Percentage ${nonEssentialsPercentage}`)
    res.json({
        message: "ok",
        data: req.body
    })
})

module.exports = router;