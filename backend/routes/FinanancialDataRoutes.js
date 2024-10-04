const express = require("express");
const router = express.Router();


const { parseAllToFloat, sumAllValues, validateObj, calcPercentage } = require('../controllers/DataController')

router.get('/data/test', (req, res) => {
    res.send("data route working")
})
router.post('/data', (req, res) => {
    const { income, essentials, nonEssentials } = req.body
    // console.log(`FROM FINANCIAL DATA ROUTES ${sumAllValues(essentials)}`)
    console.log(calcPercentage(essentials, income))
    res.json({
        message: "ok",
        data: req.body
    })
})

module.exports = router;