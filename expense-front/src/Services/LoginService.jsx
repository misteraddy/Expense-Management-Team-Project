import axios from 'axios';

const LOGIN_URL='http://localhost:9797/exp-mng/login';

export const registerNewUser=(user)=>{
    axios.post(LOGIN_URL,user);

}

export const validateUser=(userId,password)=>{
    axios.get(LOGIN_URL+'/'+userId+'/'+password);
}