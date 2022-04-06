import axios from 'axios';

const API = axios.create({ baseURL: 'https://room-hunt.herokuapp.com'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchUsers = () => API.get('/user');
export const fetchRooms = () => API.get('/rooms');
export const createRoom = (newRoom) => API.post('/rooms', newRoom);
export const updateRoom = (id, updatedRoom) => API.patch(`/rooms/${id}`, updatedRoom);
export const deleteRoom = (id) => API.delete(`/rooms/${id}`);


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


