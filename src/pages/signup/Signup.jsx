import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import ShareIcon from "@mui/icons-material/Share";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../../components/common/spinner/Spinner";

const Signup = () => {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [reenterPassword, setReenterPassword] = useState();
    const isLoading = useSelector(state => state.auth.isLoading);
    const dispatch = useDispatch();

    return (
        <div className="signup">
            <img
                src={require("../../assets/vietnamese-farmers-are-harvesting.jpg")}
                className="terraceImg"
                alt=""
            />
            <div className="rightDiv">
                <Link to="/">
                    <img
                        src={require("../../assets/agribank.png")}
                        className="logo"
                        alt=""
                    />
                </Link>
                <h1>Đăng ký tài khoản</h1>
                <TextField
                    variant="standard"
                    label="Họ và tên"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    variant="standard"
                    label="Số điện thoại"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    variant="standard"
                    label="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <TextField
                    variant="standard"
                    label="Nhập lại mật khẩu"
                    type="password"
                    onChange={(e) => setReenterPassword(e.target.value)}
                />
                <button
                    className="loginBtn"
                    onClick={(e) => {
                        if (password === reenterPassword) {
                            try {
                                dispatch(register({ name, phone, password }));
                            } catch (error) {
                                console.log(error);
                            }
                        } else toast.error("Nhập lại mật khẩu sai");
                    }}
                >
                    Đăng ký
                </button>
                <div className="bottomNav">
                    <Link to="#">
                        <ShareIcon /> Chia sẻ
                    </Link>
                    <Link to="/help">
                        <LiveHelpIcon /> Hỏi đáp
                    </Link>
                    <Link to="#">
                        <CallIcon /> Liên hệ
                    </Link>
                </div>
            </div>
            { isLoading && <Spinner /> }
        </div>
    );
};

export default Signup;
