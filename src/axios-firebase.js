import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://todolist-27a78-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance;