import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import ShareIcon from '@mui/icons-material/Share';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authSlice';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Spinner from '../../components/common/spinner/Spinner';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const isLoading = useSelector(state => state.auth.isLoading);

    return (
        <div className='login'>
            <img src={require('../../assets/terrace.jpg')} className='terraceImg' alt='' />
            <div className="rightDiv">
                <Link to='/'>
                    <img src={require('../../assets/agribank.png')} className='logo' alt='' />
                </Link>        
                <h1>Đăng nhập</h1>
                <TextField variant='standard' label='Số điện thoại' onChange={(e) => setPhone(e.target.value)} />
                <TextField variant='standard' label='Mật khẩu' type='password' onChange={(e) => setPassword(e.target.value)} />
                <button 
                    className='loginBtn'
                    onClick={async (e) => {
                        await dispatch(login({phone, password}));
                        if(localStorage.user) {
                            toast.success('Đăng nhập thành công');
                            navigate('/');
                        } else {
                            toast.error('Đăng nhập thất bại')
                        }
                    }}
                >Đăng nhập</button>
                <button className='forgetBtn'>Quên mật khẩu</button>
                <button className='forgetBtn' onClick={(e) => navigate('/signup')}>Chưa có tài khoản?</button>
                <div className='bottomNav'>
                    <Link to='#'> <ShareIcon /> Chia sẻ</Link>
                    <Link to='/help'> <LiveHelpIcon /> Hỏi đáp</Link>
                    <Link to='#'> <CallIcon /> Liên hệ</Link>
                </div>
            </div>
            { isLoading && <Spinner /> }
        </div>
    )
}

export default Login