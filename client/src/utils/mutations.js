import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const SIGNUP_USER = gql`
mutation addUser($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

export const CREATE_CAUSE = gql`
  mutation createCause(
    $name: String!
    $description: String!
    $headquarters: String!
    $contactName: String!
    $contactEmail: String!
    $websiteLink: String!
    $categoryId: ID!
  ) {
    createCause(
      causeInput: {
        name: $name
        description: $description
        headquarters: $headquarters
        contactName: $contactName
        contactEmail: $contactEmail
        websiteLink: $websiteLink
        categoryId: $categoryId
      }
    ) {
      _id
      name
      description
      headquarters
      contactName
      contactEmail
      websiteLink
      category {
        _id
        name
      }
    }
  }
`;

export const EDIT_CAUSE = gql`
  mutation editCause(
    $causeId: ID!
    $name: String!
    $description: String!
    $headquarters: String!
    $contactName: String!
    $contactEmail: String!
    $websiteLink: String!
    $categoryId: ID!
  ) {
    editCause(
      causeInput: {
        causeId: $causeId
        name: $name
        description: $description
        headquarters: $headquarters
        contactName: $contactName
        contactEmail: $contactEmail
        websiteLink: $websiteLink
        categoryId: $categoryId
      }
    ) {
      _id
      name
      description
      headquarters
      contactName
      contactEmail
      websiteLink
      category {
        _id
        name
      }
    }
  }
`;
export const DELETE_CAUSE = gql`
  mutation deleteCause($causeId: ID!) {
    deleteCause(causeId: $causeId) {
      _id
      name
      description
      headquarters
      contactName
      contactEmail
      websiteLink
      category {
        _id
        name
      }
    }
  }
`;

// export const ADD_CATEGORY = gql`
//   mutation createCategory($name: String!) {
//     createCategory(categoryInput: { name: $name }) {
//       _id
//       name
//     }
//   }
// `;
// export const EDIT_CATEGORY = gql`
//   mutation editCategory($categoryId: ID!, $name: String!) {
//     editCategory(categoryInput: { categoryId: $categoryId, name: $name }) {
//       _id
//       name
//     }
//   }
// `;
// export const DELETE_CATEGORY = gql`
//   mutation deleteCategory($categoryId: ID!) {
//     deleteCategory(categoryId: $categoryId) {
//       _id
//       name
//     }
//   }
// `; 
