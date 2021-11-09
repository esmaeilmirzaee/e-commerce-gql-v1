exports.Query = {
    getProduct: (_, { id }, { products }) => {
        return products.find((product) => product.id == id);
    },
    getProducts: (_, _, { products }) => {
        return products;
    },
    getCategory: (_, { id }, { categories }) => {
        return categories.find((category) => category.id == id);
    },
    getCategories: (_, _, { categories }) => {
        return categories;
    },
};
