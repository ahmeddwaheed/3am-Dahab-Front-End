import axios from 'axios';

export default function setAutherizationToken(auth_token) {
    if(auth_token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${auth_token}`;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}