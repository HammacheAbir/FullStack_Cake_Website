const express=require("express")

const router= express.Router()

//set default API response
router.get('/',(req, res)=> {
    res.send("Welcome to home")
});

module.exports = router;