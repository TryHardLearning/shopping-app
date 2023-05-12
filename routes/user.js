const router = require("express").Router();

router.get("/test",(req,res)=>{
    res.send("User Test is sucessfull");
});
router.post("/test",(req,res)=>{
    const username =  req.body.username;
    console.log(username);
    res.send(`Hello ${username}. Test Successfully!`);
});
module.exports = router;