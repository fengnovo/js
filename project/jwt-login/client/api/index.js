import axios from 'axios';
export function login(data) {
    return axios({
        url: 'http://localhost:8001/signin',
        method: 'post',
        data
    }).then(response => {
        let data = response.data;
        if(data.errCode === 0) {
            let token = data.data.token;
            localStorage.setItem('token', token);
        }
        return data;
    });
}
export function signup(data) {
    return axios({
        url: 'http://localhost:8001/signup',
        method: 'post',
        data
    });
}