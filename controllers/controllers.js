const model = require('../model/models')
let files = require('express-fileupload')
let jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET_KEY;

/**add product from user side */
exports.addProducts = async (req, res) => {
    try {
        let categoryCreated = await model.createProducts(req, res)
        if (categoryCreated) {
            return res.status(200).send({
                status: true,
                msg: "product created sucessfully",
            })
        } else {
            return res.status(200).send({
                status: true,
                msg: "products not created",
            })
        }
    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: 'internal server error',
        })
    }
}
/**end */


/**update product */
exports.productUpadate = async (req, res) => {
    try {
        let update = await model.ProductUpadate(req, res)
        if (update) {
            return res.status(200).send({
                status: true,
                msg: 'product update sucessfully',
            })
        } else {
            return res.status(200).send({
                status: true,
                msg: 'product not update sucessfully',
            })
        }

    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: 'internal server error',
        })
    }
}

/**end */
/**get product list to particular user */
exports.getProducts = async (req, res) => {
    try {
        let getData = await model.productGet(req, res)
        if (getData&&getData.length>0) {
            return res.status(200).send({
                status: true,
                msg: "product found successfully",
                Data: getData
            })
        } else {
            return res.status(200).send({
                status: true,
                msg: 'this user has no products',
                Data: []
            })
        }
    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: 'internal server error',
        })
    }
}
/**end */

// /**delete product from product list  */
exports.productDelete = async (req, res) => {
    try {
        let deletes = await model.productdelete(req, res)
        if (deletes) {
            return res.status(200).send({
                status: true,
                msg: 'product delete sucessfully',
            })
        } else {
            return res.status(200).send({
                status: true,
                msg: 'product not delete',
            })
        }

    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: 'internal server error',
        })
    }
}
//end
