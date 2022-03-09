import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../../../components/Nav/NavBar';
import SelectList01 from '../../../../components/SelectList/SelectList01';
import Products from './component/Products/Products';
import Info from './component/Info/Info';
import Footer from '../../../../components/Footer/Footer';
import './Detail.scss';


function Detail() {
  let { ordernum } = useParams() // 주문 번호다.

  return (
    <div>
      <NavBar />

      <div className='detail-container'>
        <SelectList01 />
        <div className='detail-content'>
          <div className='title'>
            <h3>주문 내역 상세</h3>
          </div>

          <Products />
          <Info />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Detail