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
        category: Category
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
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
    Category: {
        products: (parent, args, context) => {
            return products.filter((p) => p.category == parent.id);
        },
    },
    Product: {
        category: (parent, args, context) => {
            return categories.find((c) => c.id == parent.id);
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then((url) => {
    console.log(`App is listening on 4000`);
});
