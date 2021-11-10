const { v4: uuid } = require('uuid');

exports.Mutation = {
    addCategory: (parent, { input }, { categories }) => {
        const { name } = input;
        const newCategory = { id: uuid(), name };
        categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, { input }, { products }) => {
        const { name, categoryId, price, onSale } = input;
        console.log(categoryId);
        const newProduct = {
            id: uuid(),
            name,
            price,
            category: categoryId,
            onSale: onSale ? onSale : false,
        };
        products.push(newProduct);
        return newProduct;
    },
};
