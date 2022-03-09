import React from 'react';
// import { Link } from 'react-router-dom';
import FooterShortcutsData from './FooterShortcutsData';

import './Footer.scss';

function Footer() {
  return (
    <div className='footer-container'>
      <footer>
        <div className='inquiry'>
          <h2>고객행복센터</h2>

          <div className='service-center'>
            <span>1644-1107</span>
            <dl>
              <dt>365고객센터</dt>
              <dd>오전 7시 ~ 오후 7시</dd>
            </dl>
          </div>

          <div className='kakaotalk'>
            <a href='#' target="_blank">카카오톡 문의</a>
            <dl>
              <dt>365고객센터</dt>
              <dd>오전 7시 ~ 오후 7시</dd>
            </dl>
          </div>

          <div className='one-to-one'>
            <a href='#' target="_blank">1:1 문의</a>
            <dl>
              <dt>24시간 접수 가능</dt>
              <dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
            </dl>
          </div>

          <div className='bulk-order'>
            <a href='#' target="_blank">대량주문 문의</a>
            <dl>
              <dd>비회원의 경우 메일로 문의 바랍니다.</dd>
            </dl>
          </div>
        </div>

        <div className='introduction'>
          <ul className='link-list'>
            <li><a href='#'>컬리소개</a></li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=WEep7BcboMQ"
                target="_blank"
              >컬리소개영상
              </a>
            </li>
            <li>
              <a
                href="https://marketkurly.recruiter.co.kr/appsite/company/index"
                target="_blank"
              >인재채용
              </a>
            </li>
            <li><a href='#'>이용약관</a></li>
            <li><a href='#'>개인정보처리방침</a></li>
            <li><a href='#'>이용안내</a></li>
          </ul>

          <div className='about-detail'>
            <span>법인명(상호): 주식회사 컬리 | </span><span>사업자등록번호: 261-81-23567 </span><a href='https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no=' target="_blank">사업자정보 확인</a><br/>
            <span>통신판매업: 제 2018-서울강남-01646호 | </span><span>개인정보보호책임자: 이원준</span><br/>
            <span>주소: 서울특별시 강남구 테헤란로 133, 18층(역삼동) | </span> <span>대표이사: 김슬아</span><br/>
            <span>입점문의: </span><a href='#'>입점문의하기 </a> <span>| 마케팅제휴: </span><a href='#'>business@kurlycorp.com</a><br/>
            <span>채용문의: </span><a href='#'>recruit@kurlycorp.com</a><br/>
            <span>팩스: 070-7500-6098 | </span> <span>이메일: </span><a href='#'>help@kurlycorp.com</a><br/>
            <span>대량주문 문의: </span><a href='#'>kurlygift@kurlycorp.com</a>
          </div>
        
          <ul className='site-icons'>
            {FooterShortcutsData.map(element => {
              return (
                <li key={element.id}>
                  <a href={element.href} target={element.target}>
                    <img src={element.src} alt={element.alt} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='authentication'>
          <div className="mark-01">
            <img src='https://res.kurly.com/pc/ico/2001/logo_isms.png'/>
            <ul>
              <li>[인증범위]마켓컬리 쇼핑몰 서비스 개발 · 운영</li>
              <li>[유효기간]2019.04.01 ~ 2022.03.31</li>
            </ul>
          </div>
          <div className="mark-02">
            <img src='https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png'/>
            <ul>
              <li>개인정보보호 우수 웹사이트 ·</li>
              <li>개인정보처리시스템 인증 (ePRIVACY PLUS)</li>
            </ul>
          </div>
          <div className="payments">
            <img src='https://res.kurly.com/pc/service/main/2009/logo_payments.png'/>
            <ul>
              <li>
                고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
              </li>
              <li>
                토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className='indemnification-clause'>
          <p>
            마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 
            판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          </p>
          <p>
            마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 
            컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
          </p>
          <em>
            © KURLY CORP. ALL RIGHTS RESERVED
          </em>
        </div>
      </footer>
    </div>
  )
}

export default Footer;