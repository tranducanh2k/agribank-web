import './AccountBalance.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SavingsIcon from '@mui/icons-material/Savings';
import { Link } from 'react-router-dom';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import SearchIcon from '@mui/icons-material/Search';

const AccountBalance = () => {
    return (
        <div className='account-balance'>
            <div className="left">
                <div className="box balance-info">
                    <div className="title"><CreditCardIcon /> Tài khoản thanh toán</div>
                    <div className="bi number">
                        <div className="stk">STK: <span>1504281024210</span></div>
                        <div className="balance">Số dư: 0 VND</div>
                    </div>
                    <div className="bi">
                        <div className="bi-name">Chủ tài khoản</div>
                        <div className="content">TRAN DUC ANH</div>
                    </div>
                    <div className="bi">
                        <div className="bi-name">Chi nhánh mở</div>
                        <div className="content">Chi nhanh Dong Da</div>
                    </div>
                </div>
                <div className="box safe-balance">
                    <div className="title">
                        <SavingsIcon /> <span>Tài khoản tiết kiệm</span>
                    </div>
                    <Link to='#'>Xem chi tiết</Link>
                </div>
            </div>
            <div className="box search-transaction">
                <div className="title">
                    <ContentPasteSearchIcon /> Tra cứu giao dịch
                </div>
                <div className="search">
                    <div className="choose-date">
                        <label>Từ ngày</label> <input type='date' name='from-date' />
                    </div>
                    <div className="choose-date">
                        <label>Đến ngày</label> <input type='date' name='to-date' />
                    </div>
                    <button><SearchIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default AccountBalance