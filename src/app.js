const { ApolloServer, gql } = require('apollo-server');
const products = require('./dummy/products');
const categories = require('./dummy/categories');
const { typeDefs } = require('./apollo/schema');
const { Query, Category, Product } = require('./apollo');

const server = new ApolloServer({
    typeDefs,
    resolvers: { Query, Product, Category },
    context: { products, categories },
});

server.listen().then(() => {
    console.log(`App is listening on 4000`);
});
