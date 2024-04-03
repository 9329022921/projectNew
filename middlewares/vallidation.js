// validation.js
/**exports express-validator modules */
const { body, validationResult } = require('express-validator');

/**register vallidation start */
const validateUser = [
    body('name').notEmpty().withMessage('Username must be required'),
    body('email').isEmail().withMessage('email must be require'),
    body('password').notEmpty().isLength({ min: 8 }).withMessage('password should be eight'),
    // Add more validation rules as needed
];
//**login vallidation start */
const loginVallidation = [
    body('email').isEmail().withMessage('email must be require'),
    body('password').notEmpty().isLength({ min: 8 }).withMessage('password should be eight'),
];

/**vallidation error handeling function */
const handleValidationErrors = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).send({
            msg: error.errors[0].msg
        })
    }
    /**if our condition goes to true */
    next();
};
/**exports particular methods */
module.exports = {
    validateUser,
    loginVallidation,
    handleValidationErrors
};
