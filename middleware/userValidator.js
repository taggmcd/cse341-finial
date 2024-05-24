const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
    return [
        //make should not be empty
            body("firstName")
            .trim()
            .isLength({ min: 3 })
            .withMessage('Please enter a valid first name.'),

            body("lastName")
            .trim()
            .isLength({ min: 3 })
            .withMessage('Please enter a valid last name.'),

            body("email")
            .trim()
            .isEmail()
            .withMessage('Please enter a valid email.'),

            body("password")
            .trim()
            .isStrongPassword({ 
            minLength: 12,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            })
            .withMessage("Password does not meet requirements."),

            body("dob")
            .trim()
            .isLength({ min: 4 })
            .withMessage('Please enter a valid date of birth .'),
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()) {
        return next();
    };
    const extractedErrors = {};
    errors.array().forEach((err) => {
        extractedErrors[err.path] = err.msg;
    });
    return res.status(422).json({errors: extractedErrors})
    
}

module.exports = {userValidationRules, validate};