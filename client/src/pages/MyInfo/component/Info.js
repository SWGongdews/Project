import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Info.scss';


function Info() {
  let navigate = useNavigate()

  const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get('')
  //     .then((response) => {
  //       setData(response.data)
  //     })
  //     .catch((error) => console.log(error))
  // })

  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("unchecked")
  const [birth, setBirth] = useState("")
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")
  const [day, setDay] = useState("")

  const [checkPassword, setCheckPassword] = useState(true)
  const [checkNewPassword, setCheckNewPassword] = useState(true)
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(true)
  const [checkEmail, setCheckEmail] = useState(true)

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onNewPasswordHandler = (event) => {
    setNewPassword(event.currentTarget.value)
  }

  const onConfirmNewPasswordHandler = (event) => {
    setConfirmNewPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
    setCheckEmail(false)
  }

  const onPhoneHandler = (event) => {
    setPhone(event.currentTarget.value)
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

  // recoil로 가입했을 때의 비밀번호와 비교하게 코딩
  const checkCurrentPassword = (event) => {
    if (event.currentTarget.value !== data[4])
      setCheckPassword(false)
    else 
      setCheckPassword(true)
  }

  // Password 유효성을 확인하는 함수(Keyup)
  const checkValidPassword = (event) => {
    let regExpPW = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
    let repeatSame3Char = /(\d)\1\1/

    if (regExpPW.test(newPassword) && !repeatSame3Char.test(newPassword)) {
      setCheckNewPassword(true)
    } else {
      setCheckNewPassword(false)
    }
  }

  // confirmPassword 유효성을 확인하는 함수(Keyup)
  const checkValidConfirmPassword = () => {
    if (checkNewPassword && newPassword === confirmNewPassword) {
      setCheckConfirmPassword(true)
    } else {
      setCheckConfirmPassword(false)
    }
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

  // 백엔드에서 테이블의 부분 업데이트 가능한지 확인 후 맞춰서 코딩
  const OnMypageSubmitHandler = (event) => {
    event.preventDefault();

    setBirth(`${year}-${month}-${day}`)

    // 예외 처리들
    // if (password === '') {
    //   alert('비밀번호를 입력해 주세요'); return
    // }
    // if (confirmNewPassword === '') {
    //   alert('비밀번호를 한번 더 입력해주세요'); return
    // }
    if (!checkPassword) {
      alert('현재 비밀번호를 확인해주세요')
    }
    if (!checkNewPassword) {
      alert('새 비밀번호를 확인해주세요')
    }
    if (!checkConfirmPassword) {
      alert('새 비밀번호를 확인해주세요')
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
    // if (year !== '' || month !== '' || day !== '') {
    //   if (year.length !== 4 || month.length !== 2 || day.length !== 2) {
    //     alert('생년월일을 옳바르게 입력해주세요.'); return
    //   }
    // }
    if (year === '' && month === '' && day === '') {
      setBirth('')
    }

    axios.post('/users/update', {
      newPassword: newPassword, name: name, email: email, phone: phone,
      gender: gender, birth: birth
    })
      .then((response) => {
        if (response.statusText === 'OK') {
          alert('회원정보가 수정되었습니다.')
          navigate('/main')
        } else {
          alert('회원정보 수정에 실패하였습니다. 다시 시도해주세요.')
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className='info-container'>
      <div className='edit-info'>
        <h3>개인 정보 수정</h3>
        <div>
          <form onSubmit={OnMypageSubmitHandler}>
            <table className='info-table'>
              <tbody>
                <tr>
                  <th className='id-th'>아이디</th>
                  <td>
                    <input
                      type='text'
                      value={data[0]}
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <th>현재 비밀번호</th>
                  <td>
                    <input
                      type='password'
                      defaultValue={password}
                      onChange={onPasswordHandler}
                      onKeyUp={checkCurrentPassword}
                    />
                    {!checkPassword
                      ? <div className='pw-standard'>
                        <div>✖ 현재 비밀번호를 확인해주세요</div>
                      </div>
                      : null
                    }
                  </td>
                </tr>
                <tr>
                  <th>새 비밀번호</th>
                  <td>
                    <input
                      type='password'
                      defaultalue={newPassword}
                      onChange={onNewPasswordHandler}
                      onKeyUp={checkValidPassword}
                    />
                    {!checkNewPassword
                      ? <div className='pw-standard'>
                        <div>✖ 10자 이상 입력</div>
                        <div>✖ 영문/숫자/특수문자(공백 제외)만 허용하며, 모두 조합</div>
                        <div>✖ 동일한 숫자 3개 이상 연속 사용 불가</div>
                      </div>
                      : null
                    }
                  </td>
                </tr>
                <tr>
                  <th>새 비밀번호 확인</th>
                  <td>
                    <input
                      type='password'
                      defaultValue={confirmNewPassword}
                      onChange={onConfirmNewPasswordHandler}
                      onKeyUp={checkValidConfirmPassword}
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
                      defaultValue={name}
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
                      defaultValue={email}
                      onChange={onEmailHandler}
                      placeholder='예: marketkyurly@kurly.com'
                    />
                    <button onClick={doubleCheckEmail} className='doublecheck-button'>중복확인</button>
                  </td>
                </tr>
                <tr>
                  <th>휴대폰</th>
                  <td>
                    <input
                      type='text'
                      defaultValue={phone}
                      onChange={onPhoneHandler}
                      placeholder='숫자만 입력해주세요'
                    />
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
                          defaultValue='male'
                          onClick={onGenderHandler}
                        />
                        <label htmlFor='radio1'>남자</label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          id='radio2'
                          name='gender'
                          defaultValue='female'
                          onClick={onGenderHandler}
                        />
                        <label htmlFor='radio2'>여자</label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          id='radio3'
                          name='gender'
                          defaultValue='unchecked'
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
            <div className='btns'>
              <button className='leave-btn'>탈퇴하기</button>
              <button type='submit' className='submit-btn'>회원정보수정</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Info