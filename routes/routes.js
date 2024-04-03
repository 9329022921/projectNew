var express = require('express')
var app = express()
/**controller files start */
const Controler=require('../controllers/controllers')
/**require image upload middleware */
let uploads=require('../middlewares/profile').upload

/**user can add there on products with there muliple images */
app.get('/addProducts',uploads,Controler.addProducts)
/**user can get there own products */
app.post('/getProducts',Controler.getProducts)
/**user can update there product*/
app.put('/productUpdate',Controler.productUpadate)
// /**user can delete there product */
app.delete('/productDelete',Controler.productDelete)

module.exports=app