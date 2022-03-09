import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BeforeAfter.scss'


function BeforeAfter() {
  const [beforeReview, setBeforeReview] = useState(true)
  const [afterReview, setAfterReview] = useState(false)
  const [reivew, serReview] = useState(false) // 리뷰할 내용이 있나 체크하는 변수
  const [done, setDone] = useState(false) // 이미 리뷰한 내용이 있나 체크하는 변수
  // const [write, setWrite] = useState(false)
  const [content, setContent] = useState("")
  // const [edit, setEdit] = useState(true) 

  let navigate = useNavigate();


  const beforeReviewHandler = () => {
    setBeforeReview(true)
    setAfterReview(false)

    // axios.post('')
      // .then((response) => {
      //   if (response.statusText === 'OK') {
        
      //   } else {

      //   }
      // })
      // .catch((error) => console.log(error))

      // if문으로 작성가능한 후기가 있는지 백에서 받아온 정보로 확인하기
  }

  const afterReviewHandler = () => {
    setAfterReview(true)
    setBeforeReview(false)

    // axios.post('')
      // .then((response) => {
      //   if (response.statusText === 'OK') {
        
      //   } else {

      //   }
      // })
      // .catch((error) => console.log(error))
      // 작성한 후기가 있다면 이 값이 나오도록
      // if문으로 작성한 후기가 있는지 백에서 받아온 정보로 확인하기
  }

  // const onWriteReviewHandler = () => {
  //   setWrite(!write)
  // }

  const onReviewContentHandler = (event) => {
    setContent(event.currentTarget.value)
  }

  const goToWriteReview = () => {
    navigate('/shop/goods/goods_review_register')
  }

  const onSubmitReviewHandler = (event) => {
    event.preventDefault();

    // axios.post('', { content: content })
    //   .then((response) => {
    //     if (response.statusText === 'OK') {
    //       alert('리뷰 작성 완료했습니다.')
    //     } else {
    //       alert('다시 시도 해주세요.')
    //     }
    //   })
    //   .catch((error) => console.log(error))
  }

  return (
    <div className='user-review'>
      <div className='review-type'>
        <button onClick={beforeReviewHandler} 
          className={`${beforeReview ? 'before' : 'after'}`}
        >작성가능 후기(0)</button>
        <button onClick={afterReviewHandler} 
          className={`${afterReview ? 'before' : 'after'}`}
        >작성완료 후기(0)</button><br/>
      </div>
      <div className='user-review-list'>
        {beforeReview ? 
          <div>
            {reivew ?
              <ul>
                <li>작성가능 후기 내역이 없습니다.</li>
              </ul>
              :
              <div className='before-review'>
                <div className='product-info-table'>
                  <div className='order-number'>주문번호 1645792565010</div>
                  <table>
                    <tbody>
                      <tr>
                        <td className='product-img-td'> 
                          <img src='https://img-cf.kurly.com/shop/data/goods/1491803929655l0.jpg' />
                        </td>
                        <td className='product-info-td'>
                          <div className='name'>[풀무원] 두부면 넓은면 100g</div>
                          <span className='quantity'>1개 구매</span>
                        </td>
                        <td className='delivery-status-td'>배송완료</td>
                        <td><button onClick={goToWriteReview}>후기쓰기</button></td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td className='product-img-td'> 
                          <img src='https://img-cf.kurly.com/shop/data/goods/1491803929655l0.jpg' />
                        </td>
                        <td className='product-info-td'>
                          <div className='name'>[풀무원] 두부면 넓은면 100g</div>
                          <span className='quantity'>1개 구매</span>
                        </td>
                        <td className='delivery-status-td'>배송완료</td>
                        <td><button onClick={goToWriteReview}>후기쓰기</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* {write ? 
                  <div className='write-input'>
                    <form onSubmit={onSubmitReviewHandler}>
                      <textarea onChange={onReviewContentHandler}></textarea>
                      <button type='submit' onClick={onWriteReviewHandler}>완료</button>
                    </form>
                  </div> 
                  : null} */}
              </div>
            }
          </div>
          :
          <div>
            { done ?
              <ul>
                <li>작성한 후기가 없습니다.</li>
              </ul>
              : 
              <div className='after-review'>
                <div className='review-info'>
                  <div className='product-name'>
                    [오뚜기] 마요네즈 4종
                  </div>
                  <div className='detail'>
                    <div className='title'>
                      <div>좋아요</div>
                      <div className='date'>22.03.01 작성</div>
                    </div>
                    <p className='content'>
                      배송도 빠르고 맛있네요.
                    </p>
                    <span className='suport-count'>도움이 돼요 0</span>
                  </div>
                </div>
                <div className='after-review'>
                  <div className='product-name'>
                    [오뚜기] 마요네즈 4종
                  </div>
                  <div className='detail'>
                    <div className='title'>
                      <div>좋아요</div>
                      <div className='date'>22.03.01 작성</div>
                    </div>
                    <p className='content'>
                      배송도 빠르고 맛있네요.
                    </p>
                    <span className='suport-count'>도움이 돼요 0</span>
                  </div>
                </div>
              </div>
              
              // <div>
              //   <div className='after-review'>
              //     <div className='product-info-table'>
              //       <table>
              //         <tbody>
              //           <tr>
              //             <td className='img-td'> 
              //               <img src='https://img-cf.kurly.com/shop/data/goods/1491803929655l0.jpg' />
              //             </td>
              //             <td className='product-info-td'>
              //               <div className='product-name'>[풀무원] 두부면 넓은면 100g</div>
              //               <span className='sale-price'>2,600 원 </span>
              //               <span className='original-price'>2,470 원</span>
              //               <span className='product-num'>1개</span>
              //             </td>
              //             <td className='delivery-status-td'>배송완료</td>
              //             <td><button>수정하기</button></td>
              //           </tr>
              //         </tbody>
              //       </table>
              //     </div>
              //     {edit ? 
              //       <div className='write-input'>
              //         <form onSubmit={onSubmitReviewHandler}>
              //           <textarea onChange={onReviewContentHandler}></textarea>
              //           <button type='submit' onClick={onWriteReviewHandler}>완료</button>
              //         </form>
              //       </div> 
              //       : null}
              //   </div>
              // </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default BeforeAfter