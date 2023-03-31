const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    causes: [Cause]
  }

  type Cause {
    _id: ID!
    name: String!
    description: String!
    headquarters: String!
    category: Category!
    contactName: String!
    contactEmail: String!
    userId: ID!
    websiteLink: String 
  }

  type Category {
    _id: ID!
    name: String!
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    user: User!
    users: [User]
    me: User
    cause: Cause!
    causes: [Cause]
    causesCat: [Cause]
    category: Category!
    categories: [Category]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    createCause(causeInput: CauseInput!): Cause!
    editCause(causeInput: CauseInput): Cause!
    deleteCause(causeId: ID!): Cause
  }

  input CauseInput {
    name: String!
    description: String!
    headquarters: String!
    contactName: String!
    contactEmail: String!
    categoryId: ID!
    websiteLink: String
  }
`;

module.exports = typeDefs;
