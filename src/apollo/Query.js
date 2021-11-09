exports.Query = {
    product: (parent, { id }, { products }) => {
        return products.find((product) => product.id == id);
    },
    products: (parent, { filter }, { products }) => {
        return filter ? products.filter((product) => product.onSale) : products;
    },
    category: (parent, { id }, { categories }) => {
        return categories.find((category) => category.id == id);
    },
    categories: (parent, args, { categories }) => {
        return categories;
    },
};
