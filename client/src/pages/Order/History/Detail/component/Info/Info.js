import React from 'react';
import './Info.scss';


function Info() {
  return (
    <div>
      <div className='delivery-track-info'>
        <h2>배송조회</h2>
        <div className='track-info'>
          <div>전체</div>
          <div className='status'>배송완료</div>
          <span className='company'>CJ 대한통운</span>
          <a href='#' className='link'>배송조회</a>
        </div>
      </div>
    

      <div className='pay-info'>
        <h2>결제정보</h2>
        <div className='pay-info-table'>
          <table>
            <tbody>
              <tr>
                <th>상품금액</th>
                <td>24,050원</td>
              </tr>
              <tr>
                <th>배송비</th>
                <td>최초 1회 무료배송</td>
              </tr>
              <tr>
                <th>상품할인금액</th>
                <td>- 130원</td>
              </tr>
              <tr>
                <th>쿠폰할인</th>
                <td>- 4000원</td>
              </tr>
              <tr>
                <th>적립금사용</th>
                <td>19,000원</td>
              </tr>
              <tr>
                <th>결제금액</th>
                <td>920원</td>
              </tr>
              <tr>
                <th>적립예정금액</th>
                <td>47원</td>
              </tr>
              <tr>
                <th>결제방법</th>
                <td>네이버 페이</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='orderer-info'>
        <h2>주문정보</h2>
        <div className='orderer-info-table'>
          <table>
            <tbody>
              <tr>
                <th>주문 번호</th>
                <td>1615386424197</td>
              </tr>
              <tr>
                <th>주문자명</th>
                <td>이수정</td>
              </tr>
              <tr>
                <th>보내는 분</th>
                <td>이수정</td>
              </tr>
              <tr>
                <th>결제일시</th>
                <td>2021-03-10 23:27:47</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='delivery-info'>
        <h2>배송정보</h2>
        <div className='delivery-info-table'>
          <table>
            <tbody>
              <tr>
                <th>받는 분</th>
                <td>이수정</td>
              </tr>
              <tr>
                <th>휴대폰</th>
                <td>010-4828-7318</td>
              </tr>
              <tr>
                <th>배송방법</th>
                <td>택배배송</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>(18254) 경기 화성시 남양읍 화성로1081번길 49-10 (푸르뫼금강에스쁘아) 103동 104호</td>
              </tr>
              <tr>
                <th>배송기사 요청사항</th>
                <td>-</td>
              </tr>
              <tr>
                <th>포장방법</th>
                <td>종이 포장재</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='addition-info'>
        <h2>추가 정보</h2>
        <div className='addition-info-table'>
          <table>
            <tbody>
              <tr>
                <th>메세지 전송 시점</th>
                <td>배송 직후</td>
              </tr>
              <tr>
                <th>미출시 조치방법</th>
                <td>결제수단으로 환불</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Info