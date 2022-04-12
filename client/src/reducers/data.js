import { FETCH_DATA} from '../constant';
// eslint-disable-next-line
export default (users = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return users;
  }
};


