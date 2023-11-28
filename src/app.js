const express = require('express');
const cors=require('cors');
const app=express()


app.use(cors());

// pparser
app.use(express.json());

//  health route 
app.get('/health', (req, res) => {
    res.status(200).json({
        status:"success"
    })
  })




module.exports= app;