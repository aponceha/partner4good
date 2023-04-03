// from activity 21.20
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
     _id
      email
    }
  }
`;


// myCause: Cause
// cause(causeId: ID!): Cause!
// causes: [Cause]
// causesCat(categoryId: ID!): [Cause]
// categories: [Category]

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      email
      password
      causes {
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
  }
`;
export const QUERY_CAUSES = gql`
  query causes {
    causes {
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
export const QUERY_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
    }
  }
`;
export const QUERY_SINGLE_CAUSE = gql`
  query cause($causeId: ID!) {
    cause(causeId: $causeId) {
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
export const QUERY_ME = gql`
  query myCause {
    myCause {
      _id
      name
      description
      contactName
      contactEmail
      category {
        _id
        name
      }
      headquarters
      websiteLink
    }
  }
`; 