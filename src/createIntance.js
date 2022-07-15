import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { refreshTokenRoute } from './utils/APIRoutes'


const refreshToken = async () => {
    try {
        const data = await axios.post(refreshTokenRoute, {
            withCredentials: true
        });
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const createAxios = (user, accessToken, dispatch, stateSuccess) => {
    const newIntance = axios.create();

    newIntance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodedToken = jwt_decode(accessToken);

            if (decodedToken.exp < date.getTime() / 1000) {

                const data = await refreshToken();

                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken
                }

                dispatch(stateSuccess(refreshUser));
                config.headers['token'] = `Bearer ${data.accessToken}`
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )
    return newIntance;

}