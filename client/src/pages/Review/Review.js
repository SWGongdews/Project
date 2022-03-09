import React from 'react';
import NavBar from '../../components/Nav/NavBar';
import SelectList02 from '../../components/SelectList/SelectList02';
import BeforeAfter from './component/BeforeAfter';
import Footer from '../../components/Footer/Footer';
import './Review.scss';


function Review() {

  return (
    <div>
      <NavBar />
      <div className='review-container'>
        <SelectList02 />

        <div className='review-content'>
          <h3>상품 후기</h3>
          <div className='review-explain'>
            <p>
              <b>후기 작성 시 사진후기 100원, 글후기 50원을 적립해드립니다.</b>
            </p>
            - 퍼플, 더퍼플은 <b>2배</b> 적립(사진 200원, 글 100원)<br />
            - 주간 베스트 후기로 선정 시 <b>5,000원</b>을 추가 적립<br />
            * 후기 작성은 배송 완료일로부터 30일 이내 가능합니다.
            <BeforeAfter />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Review;