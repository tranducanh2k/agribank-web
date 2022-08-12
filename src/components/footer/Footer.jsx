import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import { YouTube } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='left-div'>
                <div className="menu-footer">
                    <ul>
                        <li><Link to='#'>Điều khoản sử dụng</Link></li>
                        <li><Link to='#'>An toàn & Bảo mật</Link></li>
                    </ul>
                </div>
                <div className="info-footer">
                    <div className="info-div">2019 Bản quyền thuộc về Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam</div>
                    <div className="info-div">Hội sở: Số 2 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội</div>
                    <div className="info-div">ĐT: 1900558818/(+84-24)32053205. Email: cskh@agribank.com.vn. Swift Code: VBAAVNVX</div>
                </div>
            </div>
            <div className="right-div">
                <span>Theo dõi chúng tôi</span>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/Agribank.VN/'>
                            <FacebookIcon sx={{color: 'white'}} />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/channel/UCoIanxKOFn5to11SCoNuOAg'>
                            <YouTube sx={{color: 'white'}} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer