import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../../../components/Nav/NavBar';
import Footer from '../../../../components/Footer/Footer';
import './ChangePW.scss';


function ChangePW() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [checkPassword, setCheckPassword] = useState(false)
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false)

  let navigate = useNavigate()

  const onPasswordHandler = (event) => {
    setPassword(event.target.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  // password 유효성 체크하는 함수
  const checkValidPassword = () => {
    let regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/
    let repeatSame3Char = /(\d)\1\1/

    if(regExp.test(password) && !repeatSame3Char.test(password)) {
      setCheckPassword(false)
    } else {
      setCheckPassword(true)
    }
  }

  // confirmpassword 유효성 체크하는 함수
  const checkValidConfirmPassword = () => {
     if (!checkPassword && password === confirmPassword) {
      setCheckConfirmPassword(false)
    } else {
      setCheckConfirmPassword(true)
    }
  }

  const onChangePWSubmitHandler = (event) => {
    event.preventDefault();

    axios.post('', { params: { password: password } })
      .then((response) => {
        if (response.statusText === 'OK') {
          alert('비밀번호 변경이 완료되었습니다.')
          navigate('/shop/member/login')
        }
        else {
          alert('비밀번호 변경에 실패했습니다. 다시 시도해 주세요.')
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <NavBar/>

      <div className='pw-container'>
        <h3>비밀번호 재설정</h3>
        <div className='pw-form'>
          <form onSubmit={onChangePWSubmitHandler}>
            <label htmlFor='new-pw'>새 비밀번호 등록</label>
            <input 
              type='password' 
              value={password} 
              onChange={onPasswordHandler} 
              onKeyUp={checkValidPassword}
              placeholder='새 비밀번호를 입력해 주세요'
              id='new-pw'
            />
            {checkPassword
              ? <p className='pw-standard'>
                  <div>✖ 10자 이상 입력</div>
                  <div>✖ 영문/숫자/특수문자(공백 제외)만 허용, 모두 조합</div>
                  <div>✖ 동일한 숫자 3개 이상 연속 사용 불가</div>
                </p> 
              : null
            }
            <label htmlFor='confirm-pw'>새 비밀번호 확인</label>
            <input 
              type='password' 
              value={confirmPassword} 
              onChange={onConfirmPasswordHandler} 
              onKeyUp={checkValidConfirmPassword}
              placeholder='새 비밀번호를 한 번 더 입력해 주세요'
              id='confirm-pw'
            />
            {checkConfirmPassword
              ? <div>
                  <p className='check-pw'>✖ 동일한 비밀번호를 입력해주세요</p>
                </div> 
              : null
            }
            <button 
              type='submit' 
              disabled={checkConfirmPassword}
              className='submit-btn'
            >확인
            </button> 
          </form>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default ChangePW;
