import React, { useState } from 'react';
import NavBar from '../../components/Nav/NavBar';
import SlideImage from '../../components/SlideImage/SlideImage';
import Products from '../Products/Products';
import TopBtn from '../../components/TopBtn/TopBtn';
import Footer from '../../components/Footer/Footer';
import './LandingPage.scss';


function LandingPage() {
  return (
    <div>
      <NavBar />

      <SlideImage />
      <Products title='이 상품 어때요?'/>
      <Products title='놓치면 후회할 가격'/>
      <div className='image'>
        <img src='https://img-cf.kurly.com/banner/random-band/pc/img/7cb9db44-b9d2-4849-95c3-0832afe2d7ed' alt='landingpage image'/>
      </div>
      <Products title='후기 3000개 돌파 상품'/>
      <div className='image'>
        <img src='https://img-cf.kurly.com/banner/random-band/pc/img/8ded70f9-bca2-4a70-b290-beb571ff82ab' alt='landingpage image'/>
      </div>
      <Products title='지금 가장 핫한 상품'/>
      <Products title='인기 신상품 랭킹'/>

      <TopBtn />
      <Footer /> 
    </div>
  )
}

export default LandingPage;