const { ApolloServer, gql } = require('apollo-server');
const products = require('./dummy/products');
const categories = require('./dummy/categories');
const reviews = require('./dummy/reviews');
const { typeDefs } = require('./apollo/schema');
const { Query, Category, Product } = require('./apollo');

const server = new ApolloServer({
    typeDefs,
    resolvers: { Query, Product, Category },
    context: { products, categories, reviews },
});

server.listen().then(() => {
    console.log(`App is listening on 4000`);
});
