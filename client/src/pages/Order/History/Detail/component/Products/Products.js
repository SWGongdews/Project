import React, { useState } from 'react';
import axios from 'axios';
import './Products.scss';


function Products() {
  const [isSale, seIsSale] = useState(true);

  // ProductDetail의 장바구니 담기 url가져와서 재활용
  const onAllPutHandler = () => {
    // axios.post('', {  })
      // .then((response) => {
  
      // })
      // .catch((error) => { console.log(error) })
  }

  return (
    <div className='order-info'>
      <div className='order-number'>
        <h3>주문번호 1615386434197</h3>
        <span>배송 또는 상품에 문제가 있나요? <a>1:1 문의하기{'>'}</a></span>
      </div>
      <div className='order-product'>
        <table>
          <tbody>
            <tr>
              <td className='product-img-td'> 
                <img src='https://img-cf.kurly.com/shop/data/goods/1491803929655l0.jpg' />
              </td>
              <td className='product-info-td'>
                <div className='name'>[풀무원] 두부면 넓은면 100g</div>
                {!isSale ? 
                  <p className='sale'>
                    <span className='sale-price'>2,600 원</span>
                    <span className='original-price'>2,470 원</span>
                    <span className='quantity'>1개</span>
                  </p>
                  :   
                  <p className='not-sale'>
                    <span className='original-price'>2,470 원</span>
                    <span className='quantity'>1개</span>
                  </p>
                }
                
              </td>
              <td className='delivery-status-td'>배송완료</td>
              <td><button>장바구니 담기</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='btns'>
        <button className='all-put-btn' onClick={onAllPutHandler}>전체 상품 다시 담기</button>
        <button className='order-cancel-btn'>전체 상품 주문 취소</button>
      </div>
      <p>
        주문취소는 ‘배송준비중’ 이전 상태일 경우에만 가능합니다.
      </p>
    </div>
  )
}

export default Products