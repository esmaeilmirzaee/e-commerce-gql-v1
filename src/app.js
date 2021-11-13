const { ApolloServer, gql } = require('apollo-server');
const { db } = require('./dummy/db');
const { typeDefs } = require('./apollo/schema');
const { Query, Category, Product, Mutation } = require('./apollo');

const server = new ApolloServer({
    typeDefs,
    resolvers: { Query, Product, Category, Mutation },
    context: { db },
});

server.listen().then(() => {
    console.log(`App is listening on 4000`);
});
