import axios from 'axios';

const url = 'http://localhost:5000/rooms';

export const fetchRooms = () => axios.get(url);
export const createRoom = (newRoom) => axios.post(url, newRoom);
export const updateRoom = (id, updatedRoom) => axios.patch(`${url}/${id}`, updatedRoom);
export const deleteRoom = (id) => axios.delete(`${url}/${id}`);

