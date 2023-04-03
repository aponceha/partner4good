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
mutation createCause($name: String!, $description: String!, $headquarters: String!, $contactName: String!, $contactEmail: String!, $websiteLink: String!, $category: ID!) {
  createCause(name: $name, description: $description, headquarters: $headquarters, contactName: $contactName, contactEmail: $contactEmail, websiteLink: $websiteLink, category: $category){
    _id
    name
    description
    contactName
    contactEmail
    headquarters
    websiteLink
    category {
      _id
    }
  }
}
`;

export const EDIT_CAUSE = gql`
mutation editCause($name: String!, $description: String!, $headquarters: String!, $contactName: String!, $contactEmail: String!, $websiteLink: String!, $category: ID!) {
  editCause(name: $name, description: $description, headquarters: $headquarters, contactName: $contactName, contactEmail: $contactEmail, websiteLink: $websiteLink, category: $category){
    _id
    name
    description
    contactName
    contactEmail
    headquarters
    websiteLink
    category {
      _id
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