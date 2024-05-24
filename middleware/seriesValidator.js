const { body, validationResult } = require('express-validator')
const seriesValidationRules = () => {
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

            body("genre")
            .trim()
            .isLength({ min: 3 })
            .withMessage('Please enter a valid genre.'),

            body("numberOfEpisodes")
            .trim()
            .isNumeric()
            .isLength({ min: 1 })
            .withMessage("Please enter a valid number of episodes."),

            body("plotSummary")
            .trim()
            .isLength({ min: 1 })
            .withMessage('Please provide the plot summary'),
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

module.exports = {seriesValidationRules, validate};