import axios from 'axios';

export default function setAutherizationToken(auth_token) {
    if(auth_token){
        axios.defaults.headers.common['Authentication-Token'] = auth_token;
    }
    else {
        delete axios.defaults.headers.common['Authentication-Token'];
    }
}