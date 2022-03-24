import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})
export const fetchRooms = () => API.get('/rooms');
export const createRoom = (newRoom) => API.post('/rooms', newRoom);
export const updateRoom = (id, updatedRoom) => API.patch(`/rooms/${id}`, updatedRoom);
export const deleteRoom = (id) => API.delete(`/rooms/${id}`);

