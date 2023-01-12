const express = require('express')
const router=express.Router();

router.get('/',(req,res)=>{
    obj={
        a:'Note',
        number:15
    }
    res.json(obj);
})

module.exports=router