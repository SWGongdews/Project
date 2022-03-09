import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../../components/Nav/NavBar';
import Footer from '../../../components/Footer/Footer';
import './FindPW.scss';


function FindPW() {
  const [id, setId] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [choose, setChoose] = useState(true) // 휴대폰 번호, 이메일 화면 둘 중 하나 랜더링 선택하는 변수

  let navigate = useNavigate()

  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }

  const onPhoneHandler = (event) => {
    setPhone(event.currentTarget.value)
  }

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onChoosePhoneHandler = () => {
    setChoose(true)
  }

  const onChooseEmailHandler = () => {
    setChoose(false)
  }

  // /member/find/password/reset?token=620c75d8540bd0075c339ea7&by=mobile
  const onFindIDSubmitHandler_Phone = (event) => {
    event.preventDefault();

    if (phone.length !== 11) {
      alert('휴대폰 번호를 옳바르게 입력해주세요.'); return
    }

    axios.post('/users/findpw/id', 
    { params: { id: id, phone: phone } })
      .then((response) => {
        if (response.statusText === 'OK') {
          navigate('')
        } 
        else {
          alert('일치하는 회원정보가 없습니다.')
        }
      })
      .catch((error) => console.log(error))
  }

  const onFindIDSubmitHandler_Email = (event) => {
    event.preventDefault();

    axios.post('/users/findpw/email', 
    { params: { id: id, email: email } })
      .then((response) => {
        if (response.statusText === 'OK') {
          navigate('')
        } 
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <NavBar/>

      <div className='pw-container'>
        <h3>비밀번호 찾기</h3>
        <div className='pw-content'>
          <div className='find-method'>
            <button onClick={onChoosePhoneHandler}
              className={`${choose ? 'choose' : 'not-choose'}`}
            >휴대폰 인증</button>
            <button onClick={onChooseEmailHandler}
              className={`${choose ? 'not-choose' : 'choose'}`}
            >이메일 인증</button><br/>
          </div>
          <div className='pw-detail'>
            {choose ? 
              <div>
                <form onSubmit={onFindIDSubmitHandler_Phone}>
                  <label htmlFor='id'>아이디</label>
                    <input 
                    type='text' 
                    value={id} 
                    onChange={onIdHandler} 
                    placeholder='아이디를 입력해 주세요' 
                    id='id'
                    />
                  <label htmlFor='phone'>휴대폰 번호</label>
                    <input 
                      type='number' 
                      value={phone} 
                      onChange={onPhoneHandler} 
                      placeholder='휴대폰 번호을 입력해 주세요' 
                      id='phone'
                    />
                  <button type='submit' className='submit-btn'>확인</button>
                </form>
              </div>
              :
              <div>
                <form onSubmit={onFindIDSubmitHandler_Email}>
                  <label htmlFor='id'>아이디</label>
                    <input 
                      type='text' 
                      value={id} 
                      onChange={onIdHandler} 
                      placeholder='아이디를 입력해 주세요' 
                      id='id'
                    />
                  <label htmlFor='email'>이메일</label>
                    <input 
                      type='email' 
                      value={email} 
                      onChange={onEmailHandler} 
                      placeholder='이메일을 입력해 주세요' 
                      id='email'
                    />
                  <button type='submit' className='submit-btn'>확인</button>
                </form>
              </div>
            }
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default FindPW;