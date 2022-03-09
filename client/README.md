[알게된 것]
1. JS에서는 label태그 for지만 React는 htmlFor 사용
2. checked대신 defaultchecked를 해야 오류가 나지 않는다.(가장 간단한 해결방법)
3. useState로 set함수 적용 후의 값을 사용할 때는 onChange가 아닌 onKeyUp 이벤트를 사용해야 
값이 제대로 들어간다.
4. 카카오의 우편번호 API 사용
> npm install react-daum-postcode
5. onMouseEnter
> 마우스 포인터가 요소 안으로 들어올 때 발생하는 이벤트로
  요소 밖으로 나갔다 오지 않으면 계속 발생하지 않는다.(다른 곳을 클릭했다 와야한다.)
6. onmousemove 이벤트
> 마우스 포인터가 요소 위에서 움직일 때(자식 포함) 발생하는 이벤트로
  요소 위에서 마우스를 움직이면 계속 발생함
7. 동적인 url 사용하고 싶을 때 => useParams()
> import { useParams } from 'react-router-dom';
8. float를 사용할 때는 배치할 한 가지 속성에 선언하기
9. axios에서는 params가 ?뒤에오는 쿼리문을 의미한다. 서버와 의미가 다르다.
10. setState는 비동기적이다.



[ 프로젝트 현황 ]
+ 로그아웃 기능 구현

Nav - 1. 로그인 시 회원 이름이 들어가도록
      *2. 안겹치도록 - nav, 모달바들, 로그인 완료 시

SignPage - 
SignFin - 

LoginPage - 로그인 성공 시, 방법1) 토큰 전달받아 나는 로컬 스토리지에 저장함
FindID -  ''
ShowID - ''
FindPW -  changePW url useParam, token 이용
ChangePW - url 적기
MyInfo - 

LandingPae - ''
Products - Link에 각각 상품 url 적어주기
           + (홈페이지 url에 각각 상품의 고유 아이디 명 적어지도록)
ProductDetail - 1. 장바구니 담는 axios 작성 완성하기
ShoppingCart -  1. count 따로 증가되도록
                2. axios나 recoil로 각 상품들을 받아와 총 금액에 각 금액의 합이 들어가도록 
                3. 전체 선택에 value값을 지정해 잘 되도록, .length 사용되도록
Order - 1. 각 회원 정보에 맞게 코딩
        2. url 적고 데이터 알맞게 가져와 코딩

History - 1. url 적고 해당년도에 맞는 데이터 가지고 오도록 코딩
          2. 가져온 데이터 알맞은 위치에 코딩(상품이름 Link에 주문 번호 적기)
Detail - 1. ProductDetail 장바구니 담기 함수 재활용하기, url 적기
         2. 웹 url에서 주문 번호 가져다가 사용하기
         3. 주문 상품들 Mapping해서 화면 랜더링
Review - 1. 작성가능/작성한 후기확인 후 스타일 맞게 가져온 데이터 넣기
         2. 사진을 누르면 상품 디테일 페이지로 가도록,
WriteReview - ''