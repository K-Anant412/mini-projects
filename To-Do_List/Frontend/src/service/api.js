import axios from 'axios';

const API = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(
    ( config ) => {
        const token = localStorage.getItem('token');
        if ( token ) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    ( error ) => Promise.reject( error ) 
)

export const authService = {
    register: ( name, email, password ) => API.post('/auth/register', { name, email, password }),
    login: ( email, password ) => API.post('/auth/login', { email, password }),
};

export const taskService = {
    createTask: ( detail ) => API.post('/create_task', { detail }),
    getTask: () => API.get('/show_tasks'),
    updateTask: ( newDetail, task_Id ) => API.put('/update_task', { detail: newDetail, task_id: task_Id }),
    removeTask: ( task_id ) => API.delete('/remove_task', { data: {task_id: task_id}})
}

export default API;