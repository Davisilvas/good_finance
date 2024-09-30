const express = require("express");
const router = express();

router.use("/api", require('./FinanancialDataRoutes'))

// test rout
router.get('/', (req, res) => {
    res.send('api working')
})


module.exports = router;