import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'https://api.manhyellow.online';

//register user
const register = async (userData) => {
    try {
        const response = await axios.post(API_URL + '/auth/register', userData);
        
        if(response.status === 200) {
            toast.success('Đăng ký thành công');
        } else if(response.status === 500){
            toast.error('Đăng ký thất bại');
        }

        return response.data;
    } catch (error) {
        toast.error('Đăng ký thất bại');
    }
}

//login user
const login = async (userData) => {
    const response = await axios.post(API_URL + '/auth/login' , userData);

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

//logout
const logout = () => {
    localStorage.removeItem('user');
}

const authService = { register, logout, login }

export default authService;