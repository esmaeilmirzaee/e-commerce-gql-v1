const { ApolloServer, gql } = require('apollo-server');
const products = require('./dummy/products');
const categories = require('./dummy/categories');

const typeDefs = gql`
    type Query {
        hello: String
        getProducts: [Product!]!
        getProduct(id: Int, name: String): Product
        getCategories: [Category!]!
        getCategory(id: ID): Category
    }

    type Product {
        id: Int
        name: String
        image: String
    }

    type Category {
        id: ID!
        name: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return 'world';
        },
        getProducts: (parent, args, context) => {
            return products;
        },
        getProduct: (parent, args, context) => {
            return products.find((p) => p.id === args.id);
        },
        getCategories: (parent, args, context) => {
            return categories;
        },
        getCategory: (parent, args, context) => {
            return categories.find((c) => c.id === args.id);
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then((url) => {
    console.log(url);
});
