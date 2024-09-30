const express = require("express");
const router = express.Router();

router.get('/data/test', (req, res) => {
    res.send("data route working")
})

module.exports = router;