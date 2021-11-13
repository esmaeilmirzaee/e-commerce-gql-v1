exports.Product = {
    category: ({ id }, args, { db }) => {
        return db.categories.find((category) => category.id == id);
    },
    reviews: ({ id }, _, { db }) => {
        return db.reviews.filter((review) => review.productId == id);
    },
};
