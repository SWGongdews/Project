import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PopupDom from './PopupDom';
import PostCode from './PostCode';
import NavBar from '../../components/Nav/NavBar';
import Footer from '../../components/Footer/Footer';
import './SignPage.scss';


function SignPage() {
  let navigate = useNavigate()

  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [postcode, setPostcode] = useState("")
  const [address, setAddress] = useState("")
  const [addressDetail, setAddressDetail] = useState("")
  const [gender, setGender] = useState("unchecked")
  const [birth, setBirth] = useState("")
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")
  const [day, setDay] = useState("")

  const [checkId, setCheckId] = useState(true)
  const [checkPassword, setCheckPassword] = useState(true)
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(true)
  const [checkEmail, setCheckEmail] = useState(false)

  // 우편 API 호출 사용
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  // 우편 팝업창 열기
  const openPopup = () => {
    setIsPopupOpen(true)
    setShowDetail(true)
  }

  // 우편 팝업창 닫기
  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPhoneHandler = (event) => {
    setPhone(event.currentTarget.value)
  }

  const onAddressDetailHandler = (event) => {
    setAddressDetail(event.currentTarget.value)
  }

  const onGenderHandler = (event) => {
    setGender(event.currentTarget.value)
  }

  const onYearHandler = (event) => {
    setYear(event.currentTarget.value)
  }

  const onMonthHandler = (event) => {
    setMonth(event.currentTarget.value)
  }

  const onDayHandler = (event) => {
    setDay(event.currentTarget.value)
  }

  // ID 유효성을 확인하는 함수(Keyup)
  const checkValidId = (event) => {
    let regExpID = /[A-Za-z0-9]\w{5,}/;
    console.log(checkId)

    if (regExpID.test(id) && checkId) {
      setCheckId(true)
    } else {
      setCheckId(false)
    }
  }

  // Password 유효성을 확인하는 함수(Keyup)
  const checkValidPassword = (event) => {
    let regExpPW = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
    let repeatSame3Char = /(\d)\1\1/

    if (regExpPW.test(password) && !repeatSame3Char.test(password)) {
      setCheckPassword(true)
    } else {
      setCheckPassword(false)
    }
  }

  // confirmPassword 유효성을 확인하는 함수(Keyup)
  const checkValidConfirmPassword = () => {
    if (checkPassword && password === confirmPassword) {
      setCheckConfirmPassword(true)
    } else {
      setCheckConfirmPassword(false)
    }
  }

  // ID 중복확인을 하는 함수(Onclick)
  const doubleCheckID = (event) => {
    event.preventDefault();

    axios.post('/users/duplicationidcheck', { id: id })
      .then((response) => {
        if (response.data === true) {
          setCheckId(true)
          alert('사용이 가능합니다.');
        } else {
          alert('이미 등록된 아이디입니다.');
        }
      })
      .catch((error) => console.log(error))
  }

  // Email 중복확인을 하는 함수(Onclick)
  const doubleCheckEmail = (event) => {
    event.preventDefault();

    axios.post('/users/duplicationemailcheck', { email: email })
      .then((response) => {
        if (response.data === true) {
          setCheckEmail(true)
          alert('사용이 가능합니다.');
        } else {
          setCheckEmail(false)
          alert('이미 등록된 이메일입니다. 다시 작성해 주십시요!');
        }
      })
      .catch((error) => console.log(error))
  }

  const OnSignSubmitHandler = (event) => {
    event.preventDefault();

    setAddress(`${address} ${addressDetail}`)
    setBirth(`${year}-${month}-${day}`)

    // 예외 처리들
    if (id === '') {
      alert('아이디를 입력해 주세요'); return
    }
    if (checkId !== true) {
      alert('아이디 중복확인을 해주세요'); return
    }
    if (password === '' || !checkPassword) {
      alert('비밀번호를 입력해 주세요'); return
    }
    if (confirmPassword === '' || !checkConfirmPassword) {
      alert('비밀번호를 한번 더 입력해주세요'); return
    }
    if (name === '') {
      alert('이름을(를) 입력해 주세요'); return
    }
    if (email === '') {
      alert('이메일을 입력해 주세요'); return
    }
    if (checkEmail !== true) {
      alert('이메일 중복확인을 해주세요'); return
    }
    if (phone === '') {
      alert('휴대폰 번호를 입력해 주세요'); return
    }
    if (phone.length !== 11) {
      alert('휴대폰 번호를 옳바르게 입력해주세요.'); return
    }
    if (address === '') {
      alert('주소를 입력해 주세요'); return
    }
    if (year !== '' || month !== '' || day !== '') {
      if (year.length !== 4 || month.length !== 2 || day.length !== 2) {
        alert('생년월일을 옳바르게 입력해주세요.'); return
      }
    }

    axios.post("/users/signup", {
      userID: id, userPassword: password, userName: name, userEmail: email, userPhoneNum: phone,
      postcode: postcode, userLocation: address, userGender: gender, userBirth: birth
    })
      .then((response) => {
        if (response.statusText === 'OK') {
          alert('회원가입을 축하드립니다!\n당신의 영상에 컬리를 더해 보세요.')
          navigate('/shop/member/sign/fin')
        } 
        else {
          alert('다시 시도해 주세요.')
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <NavBar />

      <div className='sign-container'>
        <h3>회원가입</h3>
        <div className='sign-content'>
          <div className='sub'>
            <span>*</span>
            <p>필수입력사항</p>
          </div>

          <div>
            <form onSubmit={OnSignSubmitHandler}>
              <table className='sign-table'>
                <tbody>
                  <tr>
                    <th className='id-th'>아이디</th>
                    <td className='id-td'>
                      <input
                        type='text'
                        value={id}
                        onChange={onIdHandler}
                        onKeyUp={checkValidId}
                        placeholder='6자 이상의 영문 혹은 영문과 숫자를 조합'
                      />
                      <button onClick={doubleCheckID} className='doublecheck-btn'>중복확인</button>
                      {!checkId
                        ? <p className='id-standard'>
                          <div>✖ 6자 이상의 영문 혹은 영문과 숫자를 조합</div>
                          <div>✖ 아이디 중복확인</div>
                        </p>
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <th>비밀번호</th>
                    <td>
                      <input
                        type='password'
                        value={password}
                        onChange={onPasswordHandler}
                        onKeyUp={checkValidPassword}
                        placeholder='비밀번호를 입력해주세요'
                      />
                      {!checkPassword
                        ? 
                        <div className='pw-standard'>
                          <div>✖ 10자 이상 입력</div>
                          <div>✖ 영문/숫자/특수문자(공백 제외)만 허용하며, 모두 조합</div>
                          <div>✖ 동일한 숫자 3개 이상 연속 사용 불가</div>
                        </div>
                        : null
                      }
                    </td>
                  </tr>
                  <tr>
                    <th>비밀번호확인</th>
                    <td>
                      <input
                        type='password'
                        value={confirmPassword}
                        onChange={onConfirmPasswordHandler}
                        onKeyUp={checkValidConfirmPassword}
                        placeholder='비밀번호를 한번 더 입력해주세요'
                      />
                      {!checkConfirmPassword
                        ? <div className='pw-confirm'>
                          <p>✖ 동일한 비밀번호를 입력해주세요</p>
                        </div>
                        : null
                      }
                    </td>
                  </tr>
                  <tr>
                    <th>이름</th>
                    <td>
                      <input
                        type='text'
                        value={name}
                        onChange={onNameHandler}
                        placeholder='이름을 입력해주세요'
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td>
                      <input
                        type='email'
                        value={email}
                        onChange={onEmailHandler}
                        placeholder='예: marketkyurly@kurly.com'
                      />
                      <button onClick={doubleCheckEmail} className='doublecheck-btn'>중복확인</button>
                    </td>
                  </tr>
                  <tr>
                    <th>휴대폰</th>
                    <td>
                      <input
                        type='text'
                        value={phone}
                        onChange={onPhoneHandler}
                        placeholder='숫자만 입력해주세요'
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td>
                      {showDetail
                        ? <div>
                          <input type="text" value={postcode}></input><br />
                          <input type="text" value={address}></input><br />
                          <input
                            type="text"
                            value={addressDetail}
                            onChange={onAddressDetailHandler}
                            placeholder='나머지 주소를 입력해주세요.'
                          />
                        </div>
                        : <button type='button' onClick={openPopup} className='address-btn'>주소검색</button>
                      }
                      <div id='popupDom'>
                        {isPopupOpen && (
                          <PopupDom>
                            <PostCode
                              onClose={closePopup}
                              address={setAddress}
                              postcode={setPostcode}
                            />
                          </PopupDom>
                        )}
                      </div>
                      <div className='address-explain'>배송지에 따라 상품 정보가 달라질 수 있습니다.</div>
                    </td>
                  </tr>
                  <tr className='gender-tr'>
                    <th>성별</th>
                    <td className='gender-td'>
                      <div className='gender-input'>
                        <div>
                          <input
                            type='radio'
                            id='radio1'
                            name='gender'
                            value='male'
                            onClick={onGenderHandler}
                          />
                          <label htmlFor='radio1'>남자</label>
                        </div>
                        <div>
                          <input
                            type='radio'
                            id='radio2'
                            name='gender'
                            value='female'
                            onClick={onGenderHandler}
                          />
                          <label htmlFor='radio2'>여자</label>
                        </div>
                        <div>
                          <input
                            type='radio'
                            id='radio3'
                            name='gender'
                            value='unchecked'
                            onClick={onGenderHandler}
                            defaultChecked
                          />
                          <label htmlFor='radio3'>선택안함</label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className='birth-tr'>
                    <th className='birth-th'>생년월일</th>
                    <td className='birth-td'>
                      <div>
                        <input
                          type='number'
                          name='birth'
                          placeholder='YYYY'
                          style={{ textAlign: 'center', border: 'none', borderRight: '0px', borderTop: '0px', boderLeft: '0px', boderBottom: '0px' }}
                          onChange={onYearHandler}
                          min="1900"
                          max="2022"
                        />
                        <span>/</span>
                        <input
                          type='number'
                          name='birth'
                          placeholder='MM'
                          style={{ textAlign: 'center', border: 'none', borderRight: '0px', borderTop: '0px', boderLeft: '0px', boderBottom: '0px' }}
                          onChange={onMonthHandler}
                          min="1"
                          max="12"
                        />
                        <span>/</span>
                        <input
                          type='number'
                          name='birth'
                          placeholder='DD'
                          style={{ textAlign: 'center', border: 'none', borderRight: '0px', borderTop: '0px', boderLeft: '0px', boderBottom: '0px' }}
                          onChange={onDayHandler}
                          min="1"
                          max="31"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type='submit' className='submit-btn'>가입하기</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SignPage;