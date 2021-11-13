exports.Query = {
    product: (parent, { id }, { db }) => {
        return db.products.find((product) => product.id == id);
    },
    products: (parent, { filter }, { db, products }) => {
        switch (filter && Object.keys(filter)[0]) {
            case 'avgRating':
                return db.products.filter((p) => {
                    let perReview = db.reviews.filter(
                        (r) => r.productId == p.id,
                    );
                    let reviewsRating = perReview.reduce(
                        ({ count, acc }, review) => ({
                            count: count + 1,
                            acc: review.rating + acc,
                        }),
                        { count: 0, acc: 0 },
                    );
                    let productRating = +(reviewsRating.acc /
                    reviewsRating.count
                        ? (+(reviewsRating.acc / reviewsRating.count)).toFixed(
                              2,
                          )
                        : 0);

                    return (
                        productRating >= Math.floor(filter.avgRating) &&
                        productRating < Math.ceil(filter.avgRating)
                    );
                });

            case 'onSale':
                return db.products.filter((p) => p.onSale);
            case 'avgRating' && 'onSale':
                break;
            default:
                return db.products;
        }
    },
    category: (parent, { id }, { db }) => {
        return db.categories.find((category) => category.id == id);
    },
    categories: (parent, args, { db }) => {
        return db.categories;
    },
};
