import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBell, faShareAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import './ProductDetail.scss';


function ProductDetail() {
  const [productData, setProductData] = useState([])
  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(6990)
  const [total, setTotal] = useState(0)
  const [isLogin, setIsLogin] = useState(false)
  const [isSale, setIsSale] = useState(false)
  const [disable, setDisable] = useState(true);

  const { id } = useParams()

  const priceComma = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // useEffect(() => {
  //   // get, post인지 정하기
  //   axios.get('/products/get/{id}')
  //   .then((response) => {
  //     if (response.statusText == 'OK') {
  //       setProductData(response.data)
  //       if (productData[2] !== null) {
  //         setPrice(productData[2])
           //setIsSale(true)
  //       } else {
  //         setPrice(productData[3])
           //setIsSale(false)

  //       }
  //     }
  //     else {
  //       alert('상품 정보를 가져오는데 실패하였습니다. 새로고침 해주세요.')
  //     }
  //   })
  //   .catch((error) => console.log(error))
  // })

  // count 값이 변할 때만 버튼 비활성화 여부 확인
  useEffect(() => {
    if(count > 1) {
      setDisable(false)
    } else {
      setDisable(true)
    }
    
    setTotal(price*count)
    console.log('minus', total)
  }, [count])

  const onMinusButtonHandler = () => {
    setCount(count-1)
  }
  const onPlusButtonHandler = () => {
    setCount(count+1)
  }

  // 해당 제품에 대한 정보를 백엔드로 저장해 데이터베이스에 저장하도록
  // 보내는 정보는 처음 랜더링 시 백엔드에게 받았던 값 규격과 일치
  const onPutButtonHandler = (event) => {
    event.preventDefault();

  //   axios.post('', {})
  //   .then((response) => {
  //     if (response.statusText == 'OK') {
  //       alert('장바구니에 상품을 담았습니다.')
  //     }
  //     else {
            // alert('다시 시도해 주세요.')
  //     }
  //   })
  //   .catch((error) => console.log(error))
  }

  return (
    <div>
      <NavBar />
      {/*
        {productData.map(element => {
          return (
            <div className='product-detail-container'>
              <div className='product-image'>
                <img src='https://img-cf.kurly.com/shop/data/goods/1491803929655l0.jpg' className='main-image'/>
              </div>
              <div className='product-info'>
                <p className='name'>
                  <strong>GAP 부사 사과 한봉지 5~6입</strong>
                  <button>
                    <FontAwesomeIcon icon={faShareAlt} size='1x'/>
                  </button>
                </p>
                <p className='member-discount'>회원할인가</p>
                <span className='discount-price'>6,291</span>
                <span className='unit-01'>원</span>
                <span className='discount-rate'>10</span>
                <span className='percent'>%</span><br />
                <span className='original-price'>6,990원</span><br />
                <span className='benebit-explain'>로그인 후, 회원할인가와 적립혜택이 제공됩니다.</span>
                <div className='product-info-details'>
                  <dl className='sales-unit'>
                    <dt>판매단위</dt>
                    <dd>1봉</dd>
                  </dl>
                  <dl className='weight'>
                    <dt>중량/용량</dt>
                    <dd>5~6입/봉</dd>
                  </dl>
                  <dl className='delivery'>
                    <dt>배송구분</dt>
                    <dd>샛별배송/택배배송</dd>
                  </dl>
                  <dl className='origin'>
                    <dt>원산지</dt>
                    <dd>국산</dd>
                  </dl>
                  <dl className='packaging-type'>
                    <dt>포장타입</dt>
                    <dd>냉장/스티로폼<br/><strong>택배배송은 에코포장이 스티로폼은 대체됩니다.</strong></dd>
                  </dl>
                  <dl className='shelf-life'>
                    <dt>유통기한</dt>
                    <dd>농산물로 별도의 유통기한은 없으나, 가급적 빠르게 드시길 바랍니다. </dd>
                  </dl>
                </div>
                <div className='about-order'>
                  <div className='product-quantity'>
                    <div className='quantity-phrases'>구매수량</div>
                    <div className='plus-or-minus'>
                      <button className='minus-btn' onClick={onMinusButtonHandler}>
                        <FontAwesomeIcon icon={faMinus} size='xs' />
                      </button>
                      <input type='number' className='quantity' value={count} />
                      <button className='plus-btn' onClick={onPlusButtonHandler}>
                        <FontAwesomeIcon icon={faPlus} size='xs' />
                      </button>
                    </div>
                  </div>
                  
                  <div className='product-price'>
                    <span className='price-phrases'>총 상품금액: </span>
                    <span className='price'>{price*count}</span>
                    <span className='unit-02'>원</span>
                  </div>
                  <p className='member-benebit'>
                    <span className='save'>적립</span>
                    <span className='benebit'>로그인 후, 회원할인가와 적립혜택 제공</span>
                  </p>

                  <button className='heart-btn'>
                    <FontAwesomeIcon icon={faHeart} size='lg' />
                  </button>
                  <button className='alram-btn'>
                    <FontAwesomeIcon icon={faBell} size='lg' />
                  </button>
                  <button className='put-cart-btn' onClick={onPutButtonHandler}>장바구니 담기</button>
                </div>
              </div>
            </div>
          )
        })} */}
        <div className='product-detail-container'>
          <div className='product-image'>
            <img src={productData[0]} className='main-image'/>
          </div>
          <div className='product-info'>
            <p className='name'>
              <strong>{productData[1]}</strong>
              <button>
                <FontAwesomeIcon icon={faShareAlt} size='lx'/>
              </button>
            </p>
            <div className='detail'>{productData[2]}</div>
            {/* {isLogin ? <p className='login-success'></p> : <p className='member-discount'>회원할인가</p>} */}
            {isSale ? <p className='member-discount'>회원할인가</p> : <p className='not-member-discount'></p>}
            {
              !isSale ?
              <div className='sale'>
                <span className='discount-price'>{priceComma(productData[3])}</span>
                <span className='unit-01'>원</span>
                <span className='discount-rate'>{productData[4]}</span>
                <span className='percent'>%</span><br />
                <span className='original-price'>{priceComma(productData[5])}원</span><br />
              </div>
              :
              <div className='not-sale'>
                <span className='original-price'>
                  {priceComma(productData[5])}
                  <span className='unit-01'> 원</span>
                </span><br />
              </div>
            }
            {isLogin 
              ? <div className='login-success'>
                  <span className='save-rate'>일반 0.5%</span>
                  <span className='save-price'>개당 {(price*(5/1000))}원 적립</span>
                </div> 
              : <span className='benebit-explain'>
                로그인 후, 회원할인가와 적립혜택이 제공됩니다.
              </span>
            }
            <div className='product-info-details'>
              <dl className='sales-unit'>
                <dt>판매단위</dt>
                <dd>{productData[6]}</dd>
              </dl>
              <dl className='weight'>
                <dt>중량/용량</dt>
                <dd>{productData[7]}</dd>
              </dl>
              <dl className='delivery'>
                <dt>배송구분</dt>
                <dd>{productData[8]}</dd>
              </dl>
              <dl className='origin'>
                <dt>원산지</dt>
                <dd>국산</dd>
              </dl>
              <dl className='packaging-type'>
                <dt>포장타입</dt>
                <dd>냉장/스티로폼<br/><strong>택배배송은 에코포장이 스티로폼은 대체됩니다.</strong></dd>
              </dl>
              <dl className='shelf-life'>
                <dt>유통기한</dt>
                <dd>{productData[9]}</dd>
              </dl>
            </div>
            <div className='about-purchase'>
              <div className='purchase-count'>
                <div className='purchase-quantity'>구매수량</div>
                <div className='plus-or-minus'>
                  <button className='minus-button' disabled={disable} onClick={onMinusButtonHandler}>
                    <FontAwesomeIcon icon={faMinus} size='xs' />
                  </button>
                  <input type='number' className='counter' value={count}></input>
                  <button className='plus-button' onClick={onPlusButtonHandler}>
                    <FontAwesomeIcon icon={faPlus} size='xs' />
                  </button>
                </div>
              </div>
              
              <div className='about-price'>
                <span className='total'>총 상품금액: </span>
                <span className='total-price'>{priceComma(total)}</span>
                <span className='unit-02'>원</span>
              </div>
              <p className='member-benebit'>
                <span className='save'>적립</span>
                {/* <span className='benebit'>로그인 후, 회원할인가와 적립혜택 제공</span> */}
                {!isLogin 
                  ? <span className='benebit'>구매 시 {priceComma(Math.floor(price*0.005))}원 적립</span>
                  : <span className='benebit'>로그인 후, 회원할인가와 적립혜택 제공</span>}
              </p>

              <button className='heart-btn'>
                <FontAwesomeIcon icon={faHeart} size='lg' />
              </button>
              <button className='alram-btn'>
                <FontAwesomeIcon icon={faBell} size='lg' />
              </button>
              <button className='put-cart-btn' onClick={onPutButtonHandler}>장바구니 담기</button>
            </div>
          </div>
        </div>

      <Footer />
    </div>
  )
}

export default ProductDetail