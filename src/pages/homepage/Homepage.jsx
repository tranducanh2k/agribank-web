import './Homepage.css';
import { Link, useNavigate } from 'react-router-dom';
import ServiceItem from '../../components/homepage/service-item/ServiceItem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSelector } from 'react-redux';

const Homepage = () => {
    const navigate = useNavigate();
    const isLogined = useSelector(state => state.auth?.isLogined);

    return (
        <div className='homepage'>
            <img className='saigon-img' src={require('../../assets/saigon.jpg')} alt='' />
            {
                !isLogined &&
                <div className="img-panel">
                    <header>Hãy trở thành người dùng của Agribank, </header>
                    <button className="login-btn" onClick={(e) => navigate('/login')}>ĐĂNG NHẬP</button>
                    <button className="signup-btn" onClick={(e) => navigate('/signup')}>ĐĂNG KÝ</button>
                </div>
            }
            <div className="service-div">
                <div className="inner-service-div">
                    <ServiceItem logo='wallet.png' name='Tài khoản' navigate={(e) => navigate('/account-balance')} />
                    <ServiceItem logo='qr-code.png' name='QR Pay' />
                    <ServiceItem logo='credit-card.png' name='Dịch vụ thẻ' navigate={(e) => navigate('/card-service')}/>
                </div>
            </div>
            <div className="service-div">
                <header>Tài chính</header>
                <Link to='#' className='xemthem'>Xem thêm <ChevronRightIcon/></Link>
                <div className="inner-service-div">
                    <ServiceItem logo='online-banking.png' name='Chuyển khoản' navigate={(e) => navigate('/transfer')}/>
                    <ServiceItem logo='smartphone.png' name='Nạp tiền điện thoại' />
                    <ServiceItem logo='bill.png' name='Thanh toán hoá đơn' />
                    <ServiceItem logo='cashless-payment.png' name='Mua mã thẻ' />
                </div>
            </div>
            <div className="service-div">
                <header>Mua sắm</header>
                <div className="inner-service-div">
                    <ServiceItem logo='plane.png' name='Vé máy bay' />
                    <ServiceItem logo='hotel.png' name='Đặt phòng khách sạn' />
                    <ServiceItem logo='taxi.png' name='Gọi Taxi' />
                </div>
                <div className="inner-service-div">
                    <ServiceItem logo='locomotive.png' name='Vé tàu hoả' />
                    <ServiceItem logo='bus.png' name='Vé xe' />
                    <ServiceItem logo='flowers.png' name='Đặt hoa' />
                </div>
                <div className="inner-service-div">
                    <ServiceItem logo='marketer.png' name='Mua sắm trực tuyến' />
                    <ServiceItem logo='movie.png' name='Vé xem phim' />
                    <ServiceItem logo='golf-field.png' name='Đặt sân Golf' />
                </div>
            </div>
            <div className="service-div">
                <header>Cài đặt</header>
                <div className="inner-service-div">
                    <ServiceItem logo='otp.png' name='Cài đặt SoftOTP' />
                    <ServiceItem logo='fingerprint.png' name='Cài đặt vân tay' />
                    <ServiceItem logo='threshold.png' name='Cài đặt hạn mức' />
                    <ServiceItem logo='noti.png' name='Nhận tin biến động số dư' />
                </div>
                <div className="inner-service-div">
                    <ServiceItem logo='settings.png' name='Cài đặt tài khoản' />
                    <ServiceItem logo='private-key.png' name='Đổi mật khẩu' />
                    <ServiceItem logo='document.png' name='Quản lý danh bạ' />
                    <ServiceItem logo='investment.png' name='Quản lý đầu tư' />
                </div>
                <div className="inner-service-div">
                    <ServiceItem logo='touch-screen.png' name='Thông tin ứng dụng' />
                    <ServiceItem logo='seo-and-web.png' name='Tra cứu thông tin' />
                    <ServiceItem logo='search.png' name='Tìm kiếm địa điểm' />
                </div>
            </div>
        </div>
    )
}

export default Homepage