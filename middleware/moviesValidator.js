const { body, validationResult } = require('express-validator')
const movieValidationRules = () => {
    return [
        //make should not be empty
            body("title")
            .trim()
            .isLength({ min: 3 })
            .withMessage('Please enter a valid title.'),

            body("releaseYear")
            .trim()
            .isLength({ min: 4 })
            .withMessage('Please enter a valid year.'),

            body("genres")
            .trim()
            .isLength({ min: 3 })
            .withMessage('Please enter a valid genre.'),

            body("runtime")
            .trim()
            .isLength({ min: 1 })
            .withMessage("Please enter a valid runtime"),

            body("rated")
            .trim()
            .isLength({ min: 1 })
            .withMessage('Please enter a valid rate.'),

            body("plot")
            .trim()
            .isLength({ min: 1 })
            .withMessage('Please provide the plot'),
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

module.exports = {movieValidationRules, validate};