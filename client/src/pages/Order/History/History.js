import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/Nav/NavBar';
import SelectList01 from '../../../components/SelectList/SelectList01';
import Product from './component/Product';
import Footer from '../../../components/Footer/Footer';
import './History.scss';


function History() {
  const [selected, setSelected] = useState('all');

  const onSelectYearHandler = (event) => {
    setSelected(event.target.value);
  }

  // 년도에 맞게 데이터 가져오기
  useEffect(() => {
    // axios.post('', { year: selected })
    // .then((response) => {

    // })
    // .catch((error) => { console.log(error) })
  }, [selected])

  return (
    <div>
      <NavBar />
      <div className='history-container'>
        <SelectList01  />
        <div>
          <div className='history-content'>
            <div className='title'>
              <div>
                <h3>주문 내역<span>지난 3년간의 주문 내역 조회가 가능합니다</span></h3>
              </div>
              <div>
                <select onChange={onSelectYearHandler} value={selected}>
                  <option value='all'>전체기간</option>
                  <option value='2022'>2022년</option>
                  <option value='2021'>2021년</option>
                  <option value='2020'>2020년</option>
                </select>
              </div>
            </div>
            <Product />
          </div>
          <div className='next-btn'>
            <button>{'<<'}</button>
            <button>{'<'}</button>
            <button>1</button>
            <button>{'>'}</button>
            <button>{'>>'}</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default History