const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        getProduct(id: Int): Product
        getProducts: [Product!]!
        getCategory(id: Int): Category
        getCategories: [Category!]!
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }

    type Product {
        id: ID!
        name: String!
        price: Int!
        onSale: Boolean!
        category: Category
    }
`;
