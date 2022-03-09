import React from 'react';
import './Product.scss'


function Product() {
  return (
    <div>
      <div className='order-date'>
        2021.03.10 (23시 27분)
      </div>
      <div className='typical-info'>
        <div className='typical-name'>
          {/* <Link to=`/shop/mypage/mypage_orderview/${}`> */}
            [아르토스베이커리] 통밀 모닝빵 외 2건
            <button>{'>'}</button>
          {/* </Link> */}
        </div>
        <div className='typical-product'>
          <img src='https://img-cf.kurly.com/shop/data/goods/1491803929655l0.jpg'></img>
          <div className='detail'>
            <dl>
              <dt>주문번호</dt>
              <dd>1615386434197</dd>
            </dl>
            <dl>
              <dt>결제금액</dt>
              <dd>920원</dd>
            </dl>
            <dl>
              <dt>주문상태</dt>
              <dd>배송완료</dd>
            </dl>
          </div>
          <div>
            <button>1:1 문의</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product