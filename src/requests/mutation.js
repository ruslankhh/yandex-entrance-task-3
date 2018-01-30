import gql from 'graphql-tag';

export const CREATE_EVENT_MUTATION = gql`
  mutation CreateEvent($input: EventInput!, $usersIds: [ID], $roomId: ID!) {
    createEvent(input: $input, usersIds: $usersIds, roomId: $roomId) {
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
  }
`;

export const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEvent($id: ID!, $input: EventInput!) {
    updateEvent(id: $id, input: $input) {
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
  }
`;

export const REMOVE_EVENT_MUTATION = gql`
  mutation RemoveEvent($id: ID!) {
    removeEvent(id: $id) {
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
  }
`;

export const REMOVE_USER_FROM_EVENT_MUTATION = gql`
  mutation RemoveUserFromEvent($id: ID!, $userId: ID!) {
    removeUserFromEvent(id: $id, userId: $userId) {
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
  }
`;

export const ADD_USER_TO_EVENT_MUTATION = gql`
  mutation AddUserToEvent($id: ID!, $userId: ID!) {
    addUserToEvent(id: $id, userId: $userId) {
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
  }
`;

export const CHANGE_EVENT_ROOM_MUTATION = gql`
  mutation ChangeEventRoom($id: ID!, $roomId: ID!) {
    changeEventRoom(id: $id, roomId: $roomId) {
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
  }
`;
