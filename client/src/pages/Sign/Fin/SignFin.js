import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/Nav/NavBar';
import Footer from '../../../components/Footer/Footer';
import './SignFin.scss';
import axios from 'axios';


function SignFin() {
  let navigate = useNavigate()

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/users/complete')
    .then((response) => {
      setData(response.data)
    })
    .catch((error) => console.log(error))
  })

  const goToMypage = () => {
    navigate('/')
  }

  return (
    <div>
      <NavBar />

      <div className='fin-container'>
        <div className='fin-notice'>회원가입이 완료되었습니다.</div>

        <div className='user-info'>
          <dl className='id-content'>
            <dt className='id'>아이디</dt>
            <dd>{data[0]}</dd>
          </dl>
          <dl className='name-content'>
            <dt className='name'>이름</dt>
            <dd>{data[1]}</dd>
          </dl>
          <dl className='email-content'>
            <dt className='email'>이메일</dt>
            <dd>{data[2]}</dd>
          </dl>
        </div>

        <div className='btns'>
          <button className='go-btn'>신규 혜택 100원 상품 보러가기</button>
          <button className='mypage-btn' onClick={goToMypage}>마이페이지로 이동</button>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default SignFin;
