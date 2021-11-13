const { products } = require('./products');
const { reviews } = require('./reviews');
const { categories } = require('./categories');

exports.db = {
    categories,
    products,
    reviews,
};
