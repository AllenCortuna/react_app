


import { FETCH_ALL, CREATE, UPDATE, DELETE,} from '../constant';

export default (rooms = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...rooms, action.payload];
    case UPDATE:
      return rooms.map((room) => (room._id === action.payload._id ? action.payload : room));
    case DELETE:
      return rooms.filter((room) => room._id !== action.payload);
    default:
      return rooms;
  }
};


