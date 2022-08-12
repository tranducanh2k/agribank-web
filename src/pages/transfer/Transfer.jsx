import './Transfer.css';
import ServiceItem from '../../components/homepage/service-item/ServiceItem';
import { useNavigate } from 'react-router-dom';

const Transfer = () => {

    const navigate = useNavigate();

    return (
        <div className="transfer">
            <div className='big-title'>Chuyển khoản</div>
            <div className="body">
                <div className="row">
                    <ServiceItem logo='bank.png' name='Chuyển khoản nội bộ qua TK/SĐT' />
                    <ServiceItem logo='transfer.png' name='CK liên NH qua số tài khoản' navigate={(e)=>navigate('/banking')}/>
                    <ServiceItem logo='online-transfer.png' name='CK liên NH qua số thẻ' navigate={(e)=>navigate('/banking')}/>
                    <ServiceItem logo='qr.png' name='Chuyển tiền 24/7 mã QR' />
                </div>
            </div>
        </div>
    )
}

export default Transfer