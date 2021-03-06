import { DEV_BACKEND_URL, PROD_BACKEND_URL } from 'react-native-dotenv'

const devEnvVariables = {
    BACKEND_URL: DEV_BACKEND_URL,
}

const prodEnvVariables = {
    BACKEND_URL: PROD_BACKEND_URL,
}

export default __DEV__ ? devEnvVariables : prodEnvVariables
