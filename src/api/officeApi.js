import axios from 'axios';

const officeApi = axios.create({
    baseURL: "https://theofficeserver-5jwkhdjuha-uc.a.run.app",
});

function login(email, password) {

    return new Promise(async (resolve, reject) => {

        try {

            const response = await officeApi.post("/login", {
                email,
                password,
            });
    
            resolve(JSON.stringify(response.data));
        } catch (e) {
            reject(e.response.data || e);
        }
    });
}


function signup(email, password, confirmPassword) {

    return new Promise(async (resolve, reject) => {

        try {
            const response = await officeApi.post("/signup", {
                email,
                password,
                confirmPassword
            });
    
            resolve(JSON.stringify(response.data));
        } catch (e) {
            reject(e.response.data || e);
        }
    });
}


export default officeApi;
export {
    login,
    signup
};