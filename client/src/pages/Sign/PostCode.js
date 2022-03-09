import React from 'react';
import DaumPostcode from "react-daum-postcode";
 
const PostCode = (props) => {
  const handlePostCode = (data) => {
      let fullAddress = data.address;
      let extraAddress = ''; 
      
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      }
      
      props.postcode(data.zonecode)
      props.address(fullAddress)
      props.onClose()
  }
 
  const postCodeStyle = {
      display: "block",
      position: "absolute",
      top: "50%",
      left: "32%",
      width: "600px",
      height: "600px",
      margin: "0 auto"
    };

  return(
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
      {/* <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button> */}
    </div>
  )
}
 
export default PostCode;