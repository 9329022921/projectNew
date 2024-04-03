var express = require('express')
var bodyParser = require('body-parser')
var app = express()

//**require dotenv file to secure the valueable data  */
require('dotenv').config()
/**require a routes files */
const Routes=require('./routes/routes')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
/**routes starts */
app.use('/',Routes)
//routes end

let Port=process.env.PORT
//**server created */
app.listen(Port,()=>{
    console.log(`server started at ${Port}`)
})