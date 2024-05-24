const { body, validationResult } = require('express-validator')
const bookValidationRules = () => {
    return [
        //make should not be empty
            body("title")
            .trim()
            .isLength({ min: 3 })
            .withMessage('Please enter a valid title.'),

            body("author")
            .trim()
            .isLength({ min: 3 })
            .withMessage('Please enter a valid author.'),

            body("genre")
            .trim()
            .isLength({ min: 3 })
            .withMessage('Please enter a valid genre.'),

            body("publishedYear")
            .trim()
            .isLength({ min: 4 })
            .withMessage("Please enter a valid year"),

            body("isbn")
            .trim()
            .isLength({ min: 13 })
            .withMessage('Please enter a valid isbn.'),

            body("description")
            .trim()
            .isLength({ min: 1 })
            .withMessage('Please provide a short description'),
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

module.exports = {bookValidationRules, validate};