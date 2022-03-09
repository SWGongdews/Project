import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import './LoginPage.scss';


function LoginPage() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate();
  const nameInput = useRef();

  useEffect(() => {
    nameInput.current.focus();
  }, [])
  
  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onLoginSubmitHandler = (event) => {
    event.preventDefault();

    axios.post('/users/login', { id: id, password: password })
      .then((response) => {
        if (response.statusText === 'OK') {
          navigate('/shop/main')
        } else  {
          alert('아이디 또는 비밀번호 오류입니다.')
        }
      })
      .catch((error) => console.log(error))
  }

  const goToSignPage = () => {
    navigate('/shop/member/sign')
  }

  return (
    <div>
      <NavBar/>

      <div className='login-container'>
        <h3>로그인</h3>
        <div className='login-content'>
          <form onSubmit={onLoginSubmitHandler} className='login-form'>
            <input
              type='text' 
              name='id' 
              value={id} 
              onChange={onIdHandler} 
              placeholder='아이디를 입력해주세요'
              ref={nameInput}
              className='id-input'
            /><br/>
            <input 
              type='password' 
              name= 'password' 
              value={password} 
              onChange={onPasswordHandler} 
              placeholder='비밀번호를 입력해주세요'
              className='password-input'
            />

            <div className='additional-choice'>
              <form className='secure-checkbox'>
                <label>
                  <input type='checkbox' defaultChecked />
                  <span>보안접속</span>
                </label>
              </form>
              <div className='find-link'>
                <Link to='/find/id'>
                  아이디 찾기
                </Link>
                <Link to='/find/password'>
                  비밀번호 찾기
                </Link>
              </div>
            </div>

            <button type='submit' className='login-button'>로그인</button><br/>
            <button onClick={goToSignPage} className='signin-button'>회원가입</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LoginPage;