const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        product(id: ID!): Product
        products(filter: ProductInputFilter): [Product!]!
        category(id: Int): Category
        categories: [Category!]!
    }

    # Mutation
    type Mutation {
        addCategory(input: InputCategoryMutation!): Category!
        addProduct(input: InputProductMutation!): Product!
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean!
        deleteReview(id: ID!): Boolean!
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }

    type Product {
        id: ID!
        name: String!
        price: Float!
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

    input InputProductMutation {
        name: String!
        price: Float!
        onSale: Boolean
        categoryId: ID!
    }
`;
