const express = require("express");
const router = express.Router();

router.get('/data/test', (req, res) => {
    res.send("data route working")
})
router.post('/data', (req, res) => {
    const receivedData = req.body;
    console.log('data received', receivedData)
    res.json({
        message: "ok",
        receivedData: receivedData
    })
})

module.exports = router;