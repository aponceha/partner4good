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











export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
