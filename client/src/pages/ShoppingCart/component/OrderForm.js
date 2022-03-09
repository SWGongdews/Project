import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './OrderForm.scss';

function OrderForm() {
  const [totalPrice, setTotalPrice] = useState(50000);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(3000);
  const [isFreeelivery, setIsFreeelivery] = useState(false);

  useEffect(() => {
    if (totalPrice > 40000) {
      setDeliveryFee(0);
      setIsFreeelivery(true);
    }
  }, [totalPrice])

  let navigate = useNavigate();

  const priceComma = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  const goToOrder = () => {
    if(totalPrice === 0) {
      alert('주문할 상품이 존재하지 않습니다.')
      return
    }
    navigate('/shop/order')
  }

  return (
    <div className='order-container'>
      <div className='order-form'>
        <div className='delivery-info'>
          <h3><FontAwesomeIcon icon={faMapMarkerAlt} size='xs' /> 배송지</h3>
          <p>경기 화성시 남양읍 화성로1081번길 49-10 (푸르뫼금강에스쁘아)</p>
          <span>택배배송</span>
          <button>배송지 변경</button>
        </div>

        <div className='pay-info'>
          <dl>
            <dt>상품금액</dt>
            <dd><span className='price'>{priceComma(totalPrice)}</span><span className='won'> 원</span></dd>
          </dl>
          <dl>
            <dt>상품할인금액</dt>
            <dd><span className='price'>-{priceComma(discountPrice)}</span><span className='won'> 원</span></dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd><span className='price'>+{priceComma(deliveryFee)}</span><span className='won'> 원</span></dd>
          </dl>
          <p className='free-delivery-standard'>
            {isFreeelivery ?
              null
              :
              <span>
                {priceComma(40000-(totalPrice+discountPrice))}원 추가 주문시, 무료배송
              </span>
            }
          </p>
          <dl>
            <dt>결제예정금액</dt>
            <dd><span className='total'>{priceComma(totalPrice - discountPrice + deliveryFee)}</span><span className='won'> 원</span></dd>
          </dl>
          <div className='member-benebit'>
            <span className='icon'>적립</span>
            <span className='paragraph'>구매 시 {priceComma(Math.floor(totalPrice*0.005))}원 적립</span>
        </div>
        </div>
      </div>
      <button className='order-btn' onClick={goToOrder}>주문하기</button>
      <ul className='order-explain'>
        <li>· 쿠폰/적립금은 주문서에서 사용 가능합니다.</li>
        <li>· [배송준비중] 이전까지 주문 취소 가능합니다.</li>
        <li>· [마이컬리주문내역 상세페이지] 에서 직접 취소하실 수 있습니다. </li>
      </ul>
    </div>
  )
}

export default OrderForm