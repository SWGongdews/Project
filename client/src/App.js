import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignPage from './pages/Sign/SignPage';
import SignFin from './pages/Sign/Fin/SignFin';

import LoginPage from './pages/Login/LoginPage';
import FindID from './pages/Login/FindID/FindID';
import ShowID from './pages/Login/FindID/ShowID'; 
import FindPW from './pages/Login/FindPW/FindPW';
import ChangePW from './pages/Login/FindPW/ChangePW/ChangePW'; 
import MyInfo from './pages/MyInfo/MyInfo';

import LandingPage from './pages/LandingPage/LandingPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Order from './pages/Order/Order';
import History from './pages/Order/History/History';
import Detail from './pages/Order/History/Detail/Detail';
import Review from './pages/Review/Review';
import Write from './pages/Review/Write/Write'


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/shop/member/sign" element={<SignPage />} />
          <Route path = "/shop/member/sign/fin" element={<SignFin />} />

          <Route path = "/shop/member/login" element={<LoginPage />} />
          <Route path = "/member/find/id" element={<FindID />} />
          {/* /member/find/id/success?by=mobile */}
          <Route path = "/member/find/id/:status" element={<ShowID />} /> 
          <Route path = "/member/find/password" element={<FindPW />} /> 
          <Route path = "/member/find/password/:reset" element={<ChangePW />} /> 
          <Route path = "/shop/member/myinfo" element={<MyInfo />} />
           
          <Route path = "/shop/main/" element={<LandingPage />} />
          {/* <Route path = "/shop/goods/goods_view.php?&goodsno=27449" element={<ProductDetail/>} />  */}
          <Route path = "/shop/goods/goods_view/:productID" element={<ProductDetail />} />
          <Route path = "/shop/goods/goods_cart" element={<ShoppingCart />} /> 
          <Route path = "/shop/order" element={<Order />} /> 
          <Route path = "/shop/mypage/mypage_orderlist" element={<History />} /> 
          {/* <Route path = "/shop/mypage/mypage_orderview.php?ordno=1615386434197" element={<Detail/>} />  */}
          <Route path = "/shop/mypage/mypage_orderview/:ordernum" element={<Detail />} />
          <Route path = "/shop/mypage/mypage_review" element={<Review />} /> 
          {/* https://www.kurly.com/shop/goods/goods_review_register.php?mode=add_review&goodsno=36150&sno=undefined&referer=mypage&ordno=1645792565010&package_goodsno=36149 */}
          <Route path = "/shop/goods/goods_review_register" element={<Write />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;