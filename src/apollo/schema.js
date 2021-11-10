const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        product(id: Int!): Product
        products(filter: ProductInputFilter): [Product!]!
        category(id: Int): Category
        categories: [Category!]!
    }

    # Mutation
    type Mutation {
        addCategory(input: InputCategoryMutation!): Category!
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
        reviews: [Review!]!
    }

    type Review {
        id: ID!
        username: String!
        rating: Float!
        comment: String!
    }

    input ProductInputFilter {
        onSale: Boolean
        avgRating: Float
    }

    input InputCategoryMutation {
        name: String!
    }
`;
