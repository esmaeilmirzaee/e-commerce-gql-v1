exports.Query = {
    product: (parent, { id }, { products }) => {
        return products.find((product) => product.id == id);
    },
    products: (parent, { filter }, { products, reviews }) => {
        switch (filter && Object.keys(filter)[0]) {
            case 'avgRating':
                return products.filter((p) => {
                    let perReview = reviews.filter((r) => r.productId == p.id);
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
                return products.filter((p) => p.onSale);
            case 'avgRating' && 'onSale':
                break;
            default:
                return products;
        }
    },
    category: (parent, { id }, { categories }) => {
        return categories.find((category) => category.id == id);
    },
    categories: (parent, args, { categories }) => {
        return categories;
    },
};
