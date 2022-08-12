import React from 'react'
import Question from '../../components/question/Question'
import './Help.css'
import {question1} from '../../constants/constants';

const Help = () => {
    return (
        <div className='help'>
            <img src={require('../../assets/Q&A.jpg')} className='qaImg' alt='' />
            <h1>Hỏi đáp</h1>
            <div className='questionsDiv'>
                <Question question='Đăng ký và đăng nhập' content={question1} />
                <Question question='Mật khẩu và bảo mật' content='djfiefeifhifdfjeiofjeifjoi' />
                <Question question='Thiết bị hỗ trợ và tải ứng dụng' content='djfiefeifhifdfjeiofjeifjoi' />
                <Question question='Câu hỏi khác' content='djfiefeifhifdfjeiofjeifjoi' />
            </div>
        </div>
    )
}

export default Help