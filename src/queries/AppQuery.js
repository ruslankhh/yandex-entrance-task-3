import gql from 'graphql-tag';

export const AppQuery = gql`
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
        login
        homeFloor
        avatarUrl
      }
      room {
        id
        title
        capacity
        floor
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
