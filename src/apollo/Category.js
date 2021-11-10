exports.Category = {
    products: ({ id }, args, { products }) => {
        return products.filter((product) => {
            return product.categoryId == id;
        });
    },
};
