exports.Query = {
    getProduct: (parent, { id }, { products }) => {
        return products.find((product) => product.id == id);
    },
    getProducts: (parent, args, { products }) => {
        return products;
    },
    getCategory: (parent, { id }, { categories }) => {
        return categories.find((category) => category.id == id);
    },
    getCategories: (parent, args, { categories }) => {
        return categories;
    },
};
