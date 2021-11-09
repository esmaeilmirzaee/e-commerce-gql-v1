exports.Query = {
    product: (parent, { id }, { products }) => {
        return products.find((product) => product.id == id);
    },
    products: (parent, { filter }, { products }) => {
        let response = filter
            ? products.filter((product) => product.onSale)
            : products;
        console.log(response);
        return response;
    },
    category: (parent, { id }, { categories }) => {
        return categories.find((category) => category.id == id);
    },
    categories: (parent, args, { categories }) => {
        return categories;
    },
};
