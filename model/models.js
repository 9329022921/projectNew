var mysql = require('mysql');
//database connection//
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'task'
});
/**connection created */
connection.connect(function (err) {
    if (err) {
        console.error('Database not be connected ' + err.stack);
        return;
    }

    console.log('Database connected');
});

/**user model  */
class Model {
    /**user can create there own products and upload multiple images */
    createProducts(req, res) {
        let filees = []
        return new Promise((resolve, reject) => {
            if (!req.files || req.files.length > 0) {
                let file = req.files
                file.map((item) => {
                    return filees.push(item.path)
                })
            }
            let { name, quantity, price } = req.body
            /**insert a products */
            let insert = `INSERT INTO task.products (name,quantity,image,price) VALUES('${name}','${quantity}','[${filees}]','${price}')`;
            connection.query(insert, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }
    //**end */

    // /**product update */
    ProductUpadate(req, res) {
        return new Promise((resolve, reject) => {
            let { name, quantity, price, id } = req.body
            var update;
            if (name !== undefined) {
                update = `UPDATE task.products SET name='${name}' WHERE id=${id}`
            }
            if (quantity !== undefined) {
                update = `UPDATE task.products SET quantity='${quantity}' WHERE id=${id}`;
            }

            if (price !== undefined) {
                update = `UPDATE task.products SET price='${price}' WHERE id=${id}`;
            }

            connection.query(update, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }

    // //end

    // /**products get model */
    productGet(req, res) {
        return new Promise((resolve, reject) => {
            let get = `SELECT * FROM task.products`;
            connection.query(get, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }
    // //end

    // /**delete products */
    productdelete(req, res) {
        return new Promise((resolve, reject) => {
            let id = req.query.id
            let deleted = `DELETE FROM task.products WHERE id='${id}'`;
            connection.query(deleted, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }
    // //end

}


module.exports = new Model()