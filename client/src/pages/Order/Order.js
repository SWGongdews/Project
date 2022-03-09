import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Order.scss';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';

function Order() {
  const [show, setShow] = useState(true);
  const [isSale, seIsSale] = useState(true);

  const onShowHandler = () => {
    setShow(!show)
  }

  return (
    <div>
      <NavBar />
      <div className='order-container'>
        <div className='order-form'>
          <h2>주문서</h2>
        </div>
          
        <div className='order-product'>
          <div className='show-btn'>
            <h2>주문상품</h2>
            <button onClick={onShowHandler}>{show ? '∧' : '∨'}</button>
          </div>
          <div className='only-name' hidden={!show}>
            [MEGGLE] 스프레이 휘핑크림 250g외 5개 상품을 주문합니다.
          </div>
          <div className='product-list' hidden={show}>
            <img src='https://img-cf.kurly.com/shop/data/goods/1491803929655l0.jpg' />
            <div className='product-name'>[MEGGLE] 스프레이 휘핑크림 250g</div>
            <div className='product-count'>1개</div>
            {isSale ?
              <p className='sale'>
                <div className='sale-price'>13,200원</div>
                <div className='original-price'>13,200원</div>
              </p>
              :
              <p className='not-sale'>13,200원</p>
            }
          </div>
        </div>

        <div className='orderer-info'>
          <h2>주문자 정보</h2>
          <div className='orderer-info-table'>
            <table>
              <tbody>
                <tr>
                  <th>보내는 분</th>
                  <td>이수정</td>
                </tr>
                <tr>
                  <th>휴대폰</th>
                  <td>01048283718</td>
                </tr>
                <tr>
                  <th className='email-th'>이메일</th>
                  <td>
                    lsu7318@naver.com
                    <p>
                      <span>이메일을 통해 주문처리과정을 보내드립니다.</span><br />
                      <span>정보 변경은 마이컬리 {'>'} 개인정보 수정 메뉴에서 가능합니다.</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='delivery-info'>
          <h2>배송 정보</h2>
          <div className='delivery-info-table'>
          <table>
            <tbody>
              <tr>
                <th>배송지</th>
                <td>
                  <span className='delivery-icon'>기본배송지</span><br />
                  <span>경기 화성시</span><br />
                  <span className='delivery-kind'>택배배송</span>
                </td>
              </tr>
              <tr>
                <th>상세 정보</th>
                <td>
                  <span>이수정, 010-4828-7318</span><br />
                  <button>수정</button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div className='price-info'>
          <div className='benefit'>
            <h2>쿠폰 / 적립금</h2>
            <table className='benefit-table'>
              <tbody>
                <tr className='coupon-tr'>
                  <th>쿠폰 적용</th>
                  <td>
                    <select>
                      <option>사용가능 쿠폰 0개/전체 0개</option>
                    </select>
                    <p><Link to='#'>쿠폰사용문의(카카오톡)</Link></p>
                  </td>
                </tr>
                <tr className='saved-money-tr'>
                  <th>적립금 적용</th>
                  <td>
                    <div>
                      <input type='text' value={0}></input>
                      <button>모두 사용</button>
                    </div>
                    <p>보유 적립금: <strong>5,047</strong>원</p>
                    <ul className='saved-money-explain'>
                      <li>· 보유 적립금 1천원 이상부터 사용가능</li>
                      <li>· 적립금 내역: 마이컬리 {'>'} 적립금</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='pay-price'>
            <h2>결제금액</h2>
            <div className='detail'>
              <dl>
                <dt>주문금액</dt>
                <dd>34,460 원</dd>
              </dl>
              <dl className='more-detail'>
                <dt>- 상품금액</dt>
                <dd>35,290 원</dd>
              </dl>
              <dl className='more-detail'>
                <dt>- 상품할인금액</dt>
                <dd>- 830 원</dd>
              </dl>
              <dl>
                <dt>배송비</dt>
                <dd>+ 3000 원</dd>
              </dl>
              <dl>
                <dt>쿠폰할인금액</dt>
                <dd>0 원</dd>
              </dl>
              <dl>
                <dt>적립금사용</dt>
                <dd>0 원</dd>
              </dl>
              <dl>
                <dt>최종결제금액</dt>
                <dd><span className='total'>37,460</span> 원</dd>
              </dl>
              <p>
                <span className='saved-icon'>적립</span>
                <span>구매 시 173 원 (0.5%) 적립</span>
              </p>
            </div>
          </div>
        </div>
        <div className='pay-btn'>
          <button>32,413원 결제하기</button>
        </div>
        <ul className='pay-explain'>
          <li>[배송준비중] 이전까지 주문 취소 가능합니다.</li>
          <li>미성년자가 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.</li>
          <li>상품 미배송 시, 결제수단으로 환불됩니다.</li>
          <li>카카오페이, 차이, 토스, 네이버페이, 페이코 결제 시, 결제하신 수단으로만 환불됩니다.</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Order