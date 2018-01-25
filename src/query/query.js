import gql from 'graphql-tag';

export const APP_QUERY = gql`
  query AppQuery {
    users {
      id
      login
      homeFloor
      avatarUrl
    }
  }
`;
