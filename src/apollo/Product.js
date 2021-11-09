exports.Product = {
    category: ({ id }, args, { categories }) => {
        return categories.find((category) => category.id == id);
    },
};
