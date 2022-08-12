import './Banking.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField, Input, InputAdornment, FormHelperText, Switch } from '@mui/material';

const Banking = () => {
    return (
        <div className="banking">
            <div className="big-title">CK liên NH qua số tài khoản</div>
            <div className="body">
                <div className="input-info">
                    <div className='form'>
                        <div className="title">
                            <AccountCircleIcon /> Thông tin thụ hưởng
                        </div>
                        <div className='form-body'>
                            <div className="row">
                                <FormControl fullWidth variant='standard'>
                                    <InputLabel>Ngân hàng thụ hưởng</InputLabel>
                                    <Select
                                        value=''
                                        label="Ngân hàng thụ hưởng"
                                    >
                                        <MenuItem value='BIDV'>BIDV</MenuItem>
                                        <MenuItem value='MbBank'>MbBank</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="row">
                                <FormControl fullWidth variant="standard" >
                                    <FormHelperText>Số tiền</FormHelperText>
                                    <Input
                                        endAdornment={<InputAdornment position="end">VND</InputAdornment>}
                                        aria-describedby="standard-weight-helper-text"
                                        inputProps={{
                                        'aria-label': 'weight',
                                        }}
                                    />
                                </FormControl>      
                            </div>
                            <div className="row">
                                <TextField fullWidth variant='standard' label='Nội dung chuyển khoản' placeholder='TRAN DUC ANH chuyen khoan' />
                            </div>
                            <div className="row">
                                <label>Lưu thụ hưởng</label>
                                <Switch />
                            </div>
                        </div>
                    </div>
                    <div className="btns">
                        <button className='cancel'>Huỷ bỏ</button>
                        <button className='continue'>Tiếp tục</button>
                    </div>
                </div>
                <div className="balance-div">
                    <div className="title">
                        <CreditCardIcon /> Tài khoản nguồn
                    </div>
                    <div className="form-body">
                        <div className="number">1504281024210</div>
                        <div className="balance">
                            <span>Số dư</span>
                            <span>0 VND</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className='blur'>Đây là dịch vụ chuyển tiền nhanh <img src={require('../../assets/napas.png')} alt='' style={{width: '4rem'}}/></p>
            <p>Lưu ý: Quý khách nên sử dụng hình thức xác thực bằng SoftOTP để đảm bảo tính bảo mật và tiết kiệm thời gian hơn khi giao dịch tài chính trên Ứng dụng</p>
        </div>
    )
}

export default Banking