import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import './FindID.scss'
import NavBar from '../../../components/Nav/NavBar';
import Footer from '../../../components/Footer/Footer';

function FindID() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("") // 아이디 찾기에서 찾은 아이디를 저장, 관리하는 변수
  const [choose, setChoose] = useState(true) // 휴대폰 번호, 이메일 화면 둘 중 하나 랜더링 선택하는 변수
  const [status, setStatus] = useState("")

  let navigate = useNavigate()

  // 이벤트 등록
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
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

  const onFindIDSubmitHandler_Phone = (event) => {
    event.preventDefault();

    if (phone.length !== 11) {
      alert('휴대폰 번호를 옳바르게 입력해주세요.'); return
    }
    
    axios.post('/users/findidphone', 
      { params : { name: name, phone: phone } })
      .then((response) => {
        if (response.statusText === 'OK') {
          setId(response.data.id)
          setStatus('success?by=mobile')
          navigate(`/member/find/id/${status}`)
        } 
        else {
          alert('일치하는 회원정보가 없습니다.')
        }
      })
      .catch((error) => console.log(error))
  }

  const onFindIDSubmitHandler_Email = (event) => {
    event.preventDefault();

    axios.post('/users/findidemail', 
      { params : { name: name, email: email } })
      .then((response) => {
        if (response.statusText === 'OK') {
          setId(response.data.id)
          //setStatus('success?by=mobile')
          setStatus('success')
          navigate(`/member/find/id/${status}`)
        } 
      })
      .catch((error) => console.log(error))
  }


  return (
    <div>
      <NavBar/>
      
      <div className='id-container'>
        <h3>아이디 찾기</h3>
        <div className='id-content'>
          <div className='find-method'>
            <button onClick={onChoosePhoneHandler} 
              className={`${choose ? 'choose' : 'not-choose'}`}
            >휴대폰 인증</button>
            <button onClick={onChooseEmailHandler} 
              className={`${choose ? 'not-choose' : 'choose'}`}
            >이메일 인증</button><br/>
          </div>
          <div className='id-info'>
            {choose ? 
              <div>
                <form onSubmit={onFindIDSubmitHandler_Phone}>
                  <label htmlFor='name'>이름</label>
                    <input 
                      type='text' 
                      value={name} 
                      onChange={onNameHandler} 
                      placeholder='이름을 입력해 주세요' 
                      id='name'
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
                  <label htmlFor='name'>이름</label>
                    <input 
                      type='text' 
                      value={name} 
                      onChange={onNameHandler} 
                      placeholder='이름을 입력해 주세요'
                      id='name'
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

export default FindID;
