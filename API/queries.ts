import { gql } from '@apollo/client';

export const GET_USERS_WITH_POSTS = gql`
  query {
    users(options: {}) {
      data {
        id
        name
        email
        posts {
          data {
            id
            title
          }
        }
      }
    }
  }
`;
