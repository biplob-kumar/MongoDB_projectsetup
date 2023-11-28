const express = require('express')
const app = require('./app')
const ConnectDb = require('./database/ConnectDDB')
const { port } = require('./config')

require('dotenv')

//  data bse connection
ConnectDb()









app.listen(port, () => {console.log(` Website app on port ${port}`)})