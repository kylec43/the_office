import axios from 'axios';

const officeApi = axios.create({
    baseURL: "http://31b8-2600-387-c-5517-00-6.ngrok.io",
});

function login(email, password) {

    return new Promise(async (resolve, reject) => {

        const params = new URLSearchParams();
        params.append("email", email);
        params.append("password", password);

        try {
            const response = await officeApi.post("/login", params);
    
            resolve(response.data);
        } catch (e) {
            reject(e);
        }
    });
}


function signup(email, password) {

    return new Promise(async (resolve, reject) => {

        const params = new URLSearchParams();
        params.append("email", email);
        params.append("password", password);

        try {
            const response = await officeApi.post("/signup", params);
    
            resolve(response.data);
        } catch (e) {
            reject(e);
        }
    });
}


export default officeApi;
export {
    login,
    signup
};