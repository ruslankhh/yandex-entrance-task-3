import gql from 'graphql-tag';

export const APP_QUERY = gql`
  query AppQuery {
    users {
      id
      login
      homeFloor
      avatarUrl
    }
    events {
      id
      title
      dateStart
      dateEnd
      users {
        id
      }
      room {
        id
      }
    }
    rooms {
      id
      title
      capacity
      floor
    }
  }
`;
