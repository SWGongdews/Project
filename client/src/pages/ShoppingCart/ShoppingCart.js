import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/Nav/NavBar';
import OrderForm from './component/OrderForm';
import Footer from '../../components/Footer/Footer';
import './ShoppingCart.scss';


function ShoppingCart() {
  const [checkNum, setCheckNum] = useState(0)
  const [totalNum, setTotalNum] = useState(0)
  const [show, setShow] = useState(true)
  const [count, setCount] = useState(1)
  const [disable, setDisable] = useState(true);
  const [isSale, seIsSale] = useState(true);
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState([])

  const onAllCheckHandler = (checked) => {
    setIsAllChecked(!isAllChecked)
    if (checked) {
      setCheckedItems([...checkedItems, 'provision', 'privacy'])
    } else if ((!checked && checkedItems.includes('provision')) || (!checked && checkedItems.includes('privacy'))) {
      setCheckedItems([])
    }
  }
  const onCheckHandler = (checked, value) => {
    if (checked) {
      setCheckedItems([...checkedItems, value])
    } else if (!checked && checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((el) => el !== value))
    }
  }

  useEffect(() => {
    // 받아온 장바구니 상품들의 개수보다 크거나 같다면 이라고 바꾸기 .length 사용
    if (checkedItems.length >= 2) {
      setIsAllChecked(true)
    } else {
      setIsAllChecked(false)
    }
  }, [checkedItems])

  const priceComma = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const onShowHandler = () => {
    setShow(!show)
  }

  const onMinusButtonHandler = (event) => {
    setCount(count-1)
  }
  const onPlusButtonHandler = (event) => {
    setCount(count+1)
  }

  // count 값이 변할 때만 버튼 비활성화 여부 확인
  useEffect(() => {
    if(count > 1) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [count])

  // 초기 화면 랜더링
  // useEffect(() => {
  //   axios.get('')
  //   .then((response) => {
  //     setTotal(response.data)
  //     checkNum(response.data)
  //   })
  //   .catch((error) => console.log(error))
  // })

  // 선택한 것 삭제, 백엔드의 테이블까지 삭제되도록 구현
  // 선택된 아이템의 배열들을 백에게 보내고 삭제요청
  const onSelectDeleteHandler = () => {
    // axios.post('', { checkedItems: checkedItems })
    //   .then((response) => {
        
    //   }
    //   .catch((error) => console.log(error))
  }

  return (
    <div>
      <NavBar />

      <div className='cart-container'>
        <div>
          <h2>장바구니</h2>
        </div>
        <div className='cart-content'>
          <div className='cart-product'>
            <div className='user-choice'>
              <label>
                <input 
                  type='checkbox' 
                  value= 'allCheck'
                  onChange={ (e) => onAllCheckHandler(e.currentTarget.checked) }
                  checked={isAllChecked} 
                />전체 선택 ({checkNum}/{totalNum})
              </label>
              <button onClick={onSelectDeleteHandler}>선택삭제</button>
            </div>

            <div className='show-btn'>
              <span>상품</span>
              <button onClick={onShowHandler}>{show ? '∧' : '∨'}</button>
            </div>
            
            <div className='product-info' hidden={!show}>
              <input 
                type='checkbox' 
                value= 'provision' // 값이 map으로 각 상품의 이름을 가지도록 
                onChange={ (e) => onCheckHandler(e.currentTarget.checked, e.target.value) }
                checked={ checkedItems.includes('provision') ? true : false}
              />
              <Link to='#'>
                <img src='https://img-cf.kurly.com/shop/data/goods/1491803929655l0.jpg' />
              </Link>
              <Link to='#' className='product-name'>
                <div>[MEGGLE] 스프레이 휘핑크림 250g</div>
              </Link>
              <div className='plus-or-minus'>
                <button className='minus-btn' disabled={disable} onClick={onMinusButtonHandler}>
                  <FontAwesomeIcon icon={faMinus} size='xs' />
                </button>
                <input type='number' className='counter' value={count} checked='true'></input>
                <button className='plus-btn' onClick={onPlusButtonHandler}>
                  <FontAwesomeIcon icon={faPlus} size='xs' />
                </button>
              </div>
              {!isSale ?
                <p className='sale'>
                  {/* <div className='sale-price'>{priceComma()}원</div> */}
                  {/* <div className='original-price'>{priceComma()}원</div> */}
                </p>
                :
                <p className='not-sale'>
                  {/* {priceComma()}원 */}
                </p>
              }
              <button className='delete-btn'>✕</button>
            </div>

            <div className='product-info' hidden={!show}>
              <input 
                type='checkbox' 
                value= 'privacy'
                onChange={ (e) => onCheckHandler(e.currentTarget.checked, e.target.value) }
                checked={ checkedItems.includes('privacy') ? true : false} 
              />
              <Link to='#'>
                <img src='https://img-cf.kurly.com/shop/data/goods/1637924309442l0.jpeg' />
              </Link>
              <Link to='#' className='product-name'>
                <div>[YOZM] 플레인 그릭요거트 2종</div>
              </Link>
              <div className='plus-or-minus'>
                <button className='minus-btn' disabled={disable} onClick={onMinusButtonHandler}>
                  <FontAwesomeIcon icon={faMinus} size='xs' />
                </button>
                <input type='number' className='counter' value={count} checked='true'></input>
                <button className='plus-btn' onClick={onPlusButtonHandler}>
                  <FontAwesomeIcon icon={faPlus} size='xs' />
                </button>
              </div>
              {!isSale ?
                <p className='sale'>
                  {/* <div className='sale-price'>{priceComma()}원</div> */}
                  {/* <div className='original-price'>{priceComma()}원</div> */}
                </p>
                :
                <p className='not-sale'>
                  {/* {priceComma()}원 */}
                </p>
              }
              <button className='delete-btn'>✕</button>
            </div>
            
            <div className='user-choice'>
              <label>
                <input 
                  type='checkbox' 
                  value= 'allCheck'
                  onChange={ (e) => onAllCheckHandler(e.currentTarget.checked) }
                  checked={isAllChecked} 
                />전체 선택 ({checkNum}/{totalNum})
              </label>
              <button onClick={onSelectDeleteHandler}>선택삭제</button>
            </div>
          </div>
          <OrderForm />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ShoppingCart;