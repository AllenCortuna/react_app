import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constant';

import * as api from '../api/index.js';

export const getRooms = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRooms();
        console.log("data acquired ");
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
        console.log(error);
  }
};
 
export const createRoom = (room) => async (dispatch) => {
  try {
    const { data } = await api.createRoom(room);
    dispatch({ type: CREATE, payload: data });
    console.log("room uploaded");
  } catch (error) {
    console.log(error);
  }
};

export const updateRoom = (id, room) => async (dispatch) => {
  try {
    const { data } = await api.updateRoom(id, room);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteRoom = (id) => async (dispatch) => {
  try {
    await api.deleteRoom(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

