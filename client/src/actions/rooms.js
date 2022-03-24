import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constant';

import * as api from '../api/index.js';

export const getRooms = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRooms();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
        console.log(error);
  }
};
 
export const createRoom = (room) => async (dispatch) => {
  try {
    const { data } = await api.createRoom(room);
    console.log('room id: ',room._id);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message );
  }
};

export const updateRoom = (id, room) => async (dispatch) => {
  try {
    const { data } = await api.updateRoom(id, room);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteRoom = (id) => async (dispatch) => {
  try {
    await api.deleteRoom(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

