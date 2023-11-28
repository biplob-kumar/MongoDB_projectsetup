const mongoose = require('mongoose');
const { mongodb_database } = require('../config');

const ConnectDb= async ()=>{

    try {
 await mongoose.connect(mongodb_database);
 console.log("   Database Connection  successful..! [MongoDB]")
    } catch (error) {
        console.log(" [MongoDB]: Databse connection faild ",error)
    }
}

module.exports= ConnectDb;