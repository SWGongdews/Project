import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/Nav/NavBar';
import SelectList02 from '../../../components/SelectList/SelectList02';
import Footer from '../../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import './Write.scss';


function Write() {
  const [isOkay, setIsOkay] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if(title !== '' && content.length >= 10) {
      setIsOkay(true)
    } else {
      setIsOkay(false)
    }
  }, [title, content])

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value)
  }

  const onContentHandler = (event) => {
    setContent(event.currentTarget.value)
  }

  return (
    <div>
      <NavBar />

      <div className='write-container'>
        <SelectList02 />

        <div className='write-content'>
          <h3>후기 작성</h3>
          <div className='notice'>
            작성 시 유의사항
            <FontAwesomeIcon icon={faQuestionCircle} size='xs' />
          </div>
          <dl className='product-info'>
            <dt>
              <img src='https://img-cf.kurly.com/shop/data/goods/1557883769261s0.jpg' alt='상품 이미지' />
            </dt>
            <dd>
              오뚜기 논콜마요 300g
            </dd>
          </dl>
          <table className='write-table'>
            <tbody>
              {/* <tr className='img-tr'>
                <th>
                  <img src='https://img-cf.kurly.com/shop/data/goods/1557883769261s0.jpg' alt='상품 이미지' />
                </th>
                <td>
                  오뚜기 논콜마요 300g
                </td>
              </tr> */}
              <tr className='title-tr'>
                <th>제목</th>
                <td className='title-input-td'>
                  <input type='text' placeholder='제목을 입력해주세요' value={title} onChange={onTitleHandler} />
                </td>
              </tr>
              <tr className='content-tr'>
                <th>후기작성</th>
                <td className='textarea-td'>
                  <textarea placeholder=' 자세한 후기는 다른 고객의 구매에 많은 도움이 되며,
                  일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다.
                  반품/환불 문의는 1:1문의로 가능합니다.' value={content} onChange={onContentHandler}/>
                  <div className='text-count'>0자 / 최소 10자</div>
                </td>
              </tr>
              <tr className='photo-tr'>
                <th>사진등록</th>
                <td className='register-td'>
                  <button className='plus-icon'>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <div className='photo-notice'>
                    <span className='guide'>구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우, 통보없이 삭제 및 접립 혜택이 취소됩니다.</span>
                    <span className='photo-count'>0장 / 최대 8장</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='inquiry'>
            <span>
              혹시 상품에 문제가 있으셨나요? 
            </span>
            <Link to='#'>
              1:1 문의하기
            </Link>
          </div>
          {isOkay ?
            <div className='register-btn'>
              <button className='okay-state'>등록하기</button>
            </div>
            :
            <div className='register-btn'>
              <button className='not-okay-state'>등록하기</button>
            </div>
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Write