import './CardService.css';
import ServiceItem from '../../components/homepage/service-item/ServiceItem';
import { useNavigate } from 'react-router-dom';

const CardService = () => {

    const navigate = useNavigate();

    return (
        <div className='card-service'>
            <div className='big-title'>Dịch vụ thẻ</div>
            <p>Dịch vụ áp dụng cho khách hàng có sử dụng <span>Thẻ Agribank</span></p>
            <div className="body">
                <div className="row">
                    <ServiceItem logo='seo-and-web.png' name='Truy vấn thông tin thẻ' />
                    <ServiceItem logo='online-transfer.png' name='CK liên NH qua số thẻ' navigate={(e)=>navigate('/banking')}/>
                    <ServiceItem logo='transfer.png' name='CK liên NH qua số tài khoản' navigate={(e)=>navigate('/banking')}/>
                    <ServiceItem logo='credit-card2.png' name='Phát hành thẻ phi vật lý' />
                </div>
                <div className="row">
                    <ServiceItem logo='laptop.png' name='Khoá thẻ' />
                    <ServiceItem logo='binary.png' name='Cấp/Đổi mã Pin' />
                    <ServiceItem logo='key.png' name='Kích hoạt thẻ' />
                    <ServiceItem logo='credit-card3.png' name='Thanh toán thẻ tín dụng' />
                </div>
            </div>
        </div>
    )
}

export default CardService