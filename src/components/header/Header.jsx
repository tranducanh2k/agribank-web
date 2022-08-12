import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import { Search } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LoginIcon from '@mui/icons-material/Login';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import LanguageIcon from '@mui/icons-material/Language';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import KeyIcon from '@mui/icons-material/Key';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../redux/auth/authSlice';

const Header = () => {

    const dispatch = useDispatch();
    const [openSidebar, setOpenSidebar] = useState(false);
    const user = useSelector(state => state.auth?.user);
    const isLogined = useSelector(state => state.auth?.isLogined);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="header">
            <div className="upperHeader">
                <Link to="/">Trang chủ</Link>
                <Link to="/notification">Thông báo</Link>
                <Link to="#">Mua sắm</Link>
                <Link to="#">Sân golf</Link>
                <Link to="/account-balance">Lịch sử giao dịch</Link>
                <Link to="/help">Hỏi đáp</Link>
                <Link to="#">Liên hệ</Link>
            </div>
            <div className="lowerHeader">
                <MenuIcon
                    className="menu-icon"
                    onClick={(e) => setOpenSidebar(!openSidebar)}
                />
                <Link to="/">
                    <img
                        src={require("../../assets/agribank2.png")}
                        className="agribank2"
                        alt=""
                    />
                </Link>
                <div className="floatRight">
                    <a href="tel:+1900558818">
                        <CallIcon /> 1900558818/
                    </a>
                    <a href="tel:+842432053205">+842432053205</a>
                    <button>
                        {" "}
                        <Search />{" "}
                    </button>
                    <button onClick={() => (window.location = "/notification")}>
                        <NotificationsIcon />
                    </button>
                    <button onClick={() => (window.location = "/location")}>
                        {" "}
                        <LocationOnIcon />{" "}
                    </button>
                    {isLogined ? (
                        <div
                            className="username"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            {user.name}
                        </div>
                    ) : (
                        <button onClick={() => (window.location = "/login")}>
                            {" "}
                            <LoginIcon />{" "}
                        </button>
                    )}
                    {openMenu && (
                        <div className="menu-dropdown">
                            <ul>
                                <li>
                                    <Link
                                        to="#"
                                        onClick={() => {
                                            dispatch(logout());
                                            setOpenMenu(false);
                                        }}
                                    >
                                        Đăng xuất
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={openSidebar ? "sidebar active" : "sidebar"}>
                    <ul>
                        <li>
                            <Link to="#">
                                <PhonelinkLockIcon />
                                Cài đặt Soft OTP
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <MarkEmailUnreadIcon />
                                Nhận tin biến động số dư
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FingerprintIcon />
                                Cài đặt vân tay
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <PointOfSaleIcon />
                                Cài đặt hạn mức chuyển khoản
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <LanguageIcon />
                                Cài đặt ngôn ngữ
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <LockOpenIcon />
                                Đổi mật khẩu
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <KeyIcon />
                                Cấp/Đổi mã PIN
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <ContactPhoneIcon />
                                Quản lý danh bạ
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BusinessCenterIcon />
                                Quản lý đầu tư
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <InfoIcon />
                                Thông tin ứng dụng
                            </Link>
                        </li>
                        <li>
                            <Link to="/help">
                                <HelpIcon />
                                Hỏi đáp
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header