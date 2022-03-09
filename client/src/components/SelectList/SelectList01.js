import React from 'react'
import { Link } from 'react-router-dom';
import './SelectList01.scss';


function SelectList01() {
  return (
    <div className='selection-list1'>
      <h3>마이컬리</h3>
      <ul>
        <li><Link to='/shop/mypage/mypage_orderlist'>주문 내역</Link></li>
        <li><Link to='#'>선물 내역</Link></li>
        <li><Link to='#'>찜한 상품</Link></li>
        <li><Link to='#'>배송지 관리</Link></li>
        <li><Link to='/shop/mypage/mypage_review'>상품 후기</Link></li>
        <li><Link to='#'>상품 문의</Link></li>
        <li><Link to='#'>적립금</Link></li>
        <li><Link to='#'>쿠폰</Link></li>
        <li><Link to='/shop/member/myinfo'>개인 정보 수정</Link></li>
      </ul>
    </div>
  )
}

export default SelectList01