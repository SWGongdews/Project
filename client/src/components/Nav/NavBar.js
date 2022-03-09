import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faMapMarkerAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './NavBar.scss';


function NavBar() {
  const [Navfixed, setNavFixed] = useState(false)
  const [login, setLogin] = useState(false);
  const [service, setService] = useState(false);
  const [isCategotyShown, setIsCategotyShown] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const loginOnHandle = () => {
    setLogin(true)
  }

  const loginOffHandle = () => {
    setLogin(false)
  }

  const serviceOnHandle = () => {
    setService(true)
  }

  const serviceOffHandle = () => {
    setService(false)
  }

  // 로그인 되어 있는지 검사(토큰 여부로)
  useEffect(() => {

  })
    
  useEffect(() => {
    // scroll 이벤트 시작
    const scrollListener = () => {
      window.addEventListener("scroll", scrollHandler);
    } 
    scrollListener(); 
    // scroll 이벤트 종료
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }; 
  });

  // 스크롤 시 Nav 고정
  const scrollHandler = () => {
    const scroll = window.scrollY;

    scroll > 150 && setNavFixed(true)
    scroll <= 150 && setNavFixed(false)
  }

  const categoryOnHandle = () => {
    setIsCategotyShown(!isCategotyShown)
  }

  const categoryOffHandle = () => {
    setIsCategotyShown(!isCategotyShown)
  }

  return (
    <div className='nav-container'>     
      <div className='top-header'>
        <a>
          지금 가입하고 인기상품 <strong>100원</strong>에 받아가세요!
          <img src='https://res.kurly.com/pc/ico/1908/ico_arrow_fff_84x84.png' />
        </a>
      </div>
      <div className='user-menu'>
        <div className='shipping-guide'>
          <a>
            <img 
              src = 'https://res.kurly.com/pc/service/common/2011/delivery_210801.png'
              alt= '샛별, 택배 배송안내'
            />
          </a>
        </div>
        <div className='list'>
          <ul className='list-items'>
            {
              isLogin ?
              <li className='login-sucess'>
                <Link to='#'
                  onMouseOver={loginOnHandle}
                  onMouseLeave={loginOffHandle}
                >
                  <span>일반</span>
                  이수정 님
                  <strong>▾</strong>
                </Link>
              </li> 
              :
              <li className='signup'>
                <Link to='/shop/member/sign'>회원가입</Link>
              </li>
            }
            {
              isLogin ?
              null
              :
              <li className='login'>
                <Link to='/shop/member/login'>로그인</Link>
              </li>
            }
            <li className='service-center'>
              <Link to='#'
              onMouseOver={serviceOnHandle}
              onMouseLeave={serviceOffHandle}
              >
                고객센터<strong>▾</strong>
            </Link>
            </li>
            
          </ul>

          {login ?
            <ul className='login-user-list'>
              <li>주문 내역</li>
              <li>찜한 내역</li>
              <li>배송지 관리</li>
              <li>상품 후기</li>
              <li>적립금</li>
              <li>개인 정보 수정</li>
              <li>로그아웃</li>
            </ul>
            : null
          }

          {service ?
            <ul className='service-list'>
              <li>공지사항</li>
              <li>자주하는 질문</li>
              <li>1:1 문의</li>
              <li>대량주문 문의</li>
              <li>상품 제안</li>
              <li>에코포장 피드백</li>
            </ul>
            : null
          }
        </div>
      </div>

      <div className='logo'>
        <Link to='/shop/main/'>
          <img 
            src='https://res.kurly.com/images/marketkurly/logo/logo_x2.png' 
            alt='maketkurly_logo' 
          />
        </Link>
      </div>
      
      <div className={Navfixed ? "fixedNav" : "not-fixedNav"}>
        <nav>
          <div className='main-menu'>
            <ul className='main-menu-items'>
              <li className='total-catecory'>
                <Link 
                  to="#"
                  onMouseOver={categoryOnHandle}
                  onMouseLeave={categoryOffHandle}
                  className='total-menu'
                >
                  <span><FontAwesomeIcon icon={faBars} size='lg' /></span>
                  전체 카테고리
                </Link>
              </li>
              <li className='new-product'>
                <Link to='#' className='menus'>신상품</Link>
              </li>
              <li className='best'>
                <Link to='#' className='menus'>베스트</Link>
              </li>
              <li className='affordable-shopping'>
                <Link to='#' className='menus'>알뜰쇼핑</Link>
              </li>
              <li className='special-benebit'>
                <Link to='#' className='menus'>특가/혜택</Link>
              </li>
            </ul>
          </div>
          <div className='search'>
            <form className='search-form'>
              <input 
                type='search' 
                name='search' 
                placeholder='검색어를 입력해주세요'
                className='search-input'
              />
              <button type='submit' className='search-button'>
                <FontAwesomeIcon icon={faSearch} size='lg' />
              </button>
            </form>
          </div>   
          <div>
            <ul className='icons'>
              <li className='shipping-address'>
                <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' variant="success" />
              </li>
              <li className='heart'>
                <Link to='#'>
                  <FontAwesomeIcon icon={faHeart} size='2x' />
                </Link>
              </li>
              <li className='cart'>
                <Link to='/shop/goods/goods_cart'>
                  <FontAwesomeIcon icon={faShoppingCart} size='2x' />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <hr className='hr'></hr>
      </div>
    </div> 
  )
}

export default NavBar;