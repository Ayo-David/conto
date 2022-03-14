import axios from "axios";
import env from "../config/env";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { customNavigate } from "../navigations/SideMenu/RootNavigator";
import { CREATE_CONTACT, LOGOUT } from "../constants/routeNames";


let headers = {}

const axiosInstance = axios.create({
    baseURL: env.BACKEND_URL,
    headers,
})

axiosInstance.interceptors.request.use(
    async (config) => {
        //customNavigate(CREATE_CONTACT)
        const token = await AsyncStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    })

axiosInstance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }

        if (error.response.status === 403) {
            customNavigate(LOGOUT, { tokenExpired: true });
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    },
);

export default axiosInstance