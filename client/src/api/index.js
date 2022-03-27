import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchRooms = () => API.get('/rooms');
export const createRoom = (newRoom) => API.post('/rooms', newRoom);
export const updateRoom = (id, updatedRoom) => API.patch(`/rooms/${id}`, updatedRoom);
export const deleteRoom = (id) => API.delete(`/rooms/${id}`);


export const signIn = (formData) => API.post('/user/signIn', formData);
export const signUp = (formData) => API.post('/user/signUp', formData);


