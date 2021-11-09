exports.Product = {
    category: ({ id }, args, { categories }) => {
        return categories.find((category) => category.id == id);
    },
    reviews: ({ id }, _, { reviews }) => {
        return reviews.filter((review) => review.productId == id);
    },
};
