const { v4: uuid } = require('uuid');

exports.Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const { name } = input;
        const newCategory = { id: uuid(), name };
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, { input }, { db }) => {
        const { name, categoryId, price, onSale } = input;

        const newProduct = {
            id: uuid(),
            name,
            price,
            category: categoryId,
            onSale: onSale ? onSale : false,
        };
        db.products.push(newProduct);
        return newProduct;
    },
    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter((category) => category.id !== id);
        db.products = db.products.map((product) => {
            if (product.categoryId !== id) {
                return { ...product, categoryId: null };
            } else {
                return product;
            }
        });
        return true;
    },
    deleteProduct: (parent, { id }, { db }) => {
        db.products = db.products.filter((product) => product.id !== id);
        db.reviews = db.reviews.filter((review) => review.productId !== id);
        return false;
    },
    deleteReview: (parent, { id }, { db }) => {
        db.reviews = db.reviews.filter((review) => review.id !== id);
        return true;
    },
    updateProduct: (parent, { id, input }, { db }) => {
        const index = db.products.findIndex((product) => product.id == id);

        if (index === -1) return;

        db.products[index] = {
            ...db.products[index],
            ...input,
        };

        return db.products[index];
    },
};
