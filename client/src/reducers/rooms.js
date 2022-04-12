


import { FETCH_ALL,FETCH_OWN, CREATE, UPDATE, DELETE,} from '../constant';
// eslint-disable-next-line
export default (rooms = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_OWN:
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


