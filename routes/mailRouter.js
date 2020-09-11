const express=require("express");
const router=express.Router();

router.get('/',(req,res)=>{
    // res.send("this is tha mail router");
    res.status(200).render('main');
})

router.post('/sucess',async (req,res)=>{
  console.log(req.body) ;
    
})

module.exports=router;  