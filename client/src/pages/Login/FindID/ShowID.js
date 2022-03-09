import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/Nav/NavBar';
import Footer from '../../../components/Footer/Footer';
import './ShowID.scss'


function ShowID() {
  let navigate = useNavigate()

  const goFindPW = () => {
    navigate('/member/find/password')
  }

  const goLogin = () => {
    navigate('/shop/member/login')
  }

  return (
    <div>
      <NavBar />

      <div className='id-container'>
        <div className='id-content'>
          <div className='id-guide'>
            고객님의 마켓컬리 계정을 찾았습니다.
            <div className='explain'>아이디 확인 후 로그인해 주세요.</div>
          </div>
          <ul className='user-info'>
            <li>
              <img src='../../../../../ico_user.jpg' alt='회원 이미지' className='user-img'/>
              <div>
                <div className='user-id'>fasfa</div>
                <div className='user-join-date'>가입일 sda</div>
              </div>
            </li>
          </ul>
          <button onClick={goFindPW} className='find-password-btn'>비밀번호 찾기</button><br/>
          <button onClick={goLogin} className='login-btn'>로그인</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ShowID;