// from activity 21.20
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
mutation createCause($causeInput: CauseInput!) {
  createCause(causeInput: $CauseInput) {
    token
    user {
      _id
      email
    }
  }
}
`;