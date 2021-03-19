const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.status(200).json({ msg: 'Fibonacci API' });
});


router.post('/fibonacci', (req, res, next) => {
    const { index } = req.body
    let numbers = [0, 1];
    for (let i = 2; i < index; i++) {
        numbers[i] = numbers[i - 2] + numbers[i - 1];
    }
    const numbersCut = numbers.slice(-2)
    const sum = numbersCut.reduce((ac, cv) => ac + cv, 0)
    res.status(200).json({ result: sum });

});
router.get('/fibonacci/:index', (req, res, next) => {
    const { index } = req.params
    let numbers = [0, 1];
    for (let i = 2; i < index; i++) {
        numbers[i] = numbers[i - 2] + numbers[i - 1];
    }
    const numbersCut = numbers.slice(-2)
    const sum = numbersCut.reduce((ac, cv) => ac + cv, 0)

    res.status(200).json({ result: sum });
});

module.exports = router;