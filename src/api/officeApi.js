import axios from 'axios';

const officeApi = axios.create({
    baseURL: "https://theofficeserver-5jwkhdjuha-uc.a.run.app",
});

function login(email, password) {

    return new Promise(async (resolve, reject) => {

        try {

            const response = await officeApi.post("/login", {
                email,
                password
            });
    
            resolve(JSON.stringify(response.data));
        } catch (e) {
            reject(e.response.data || e);
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