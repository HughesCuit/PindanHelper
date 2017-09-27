var express = require('express');
var router = express.Router();

router.get('/pindan', function(req, res, next) {
    res.send('You Can\'t GET this API!');
});
router.post('/pindan', function(req, res, next) {
    let data = req.body;
    let total_price = data.prices.reduce(function(result, current) {
        return result + current.price;
    }, 0);
    let multi = data.actual_price / total_price;
    var prices = data.prices;
    prices = prices.map(function(x) {
        x.price = x.price * multi;
        return x;
    })
    console.log(total_price);
    return res.json(prices);
});

module.exports = router;