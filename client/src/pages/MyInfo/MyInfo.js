import React from 'react';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import SelectList03 from '../../components/SelectList/SelectList03';
import Info from './component/Info';
import './MyInfo.scss';


function MyInfo() {
  
  return (
    <div>
      <NavBar />
      
      <div className='info-containers'>
        <SelectList03 />
        <Info/>
      </div>
      
      <Footer />
    </div>
  )
}

export default MyInfo;