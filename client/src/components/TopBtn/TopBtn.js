import React, { useState, useEffect } from 'react';
import './TopBtn.scss';


function TopBtn() {
  const [showBtn, setShowBtn] = useState(false);

  const handleFollow = () => {
    if(window.pageYOffset > 200) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }

  const moveTop = () => { 
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setShowBtn(false);
  }

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleFollow);
    } 
    scrollListener(); 

    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <div>
      <button 
        className={showBtn ? "top-btn show" : "top-btn"}
        onClick={moveTop}
      >TOP
      </button>
    </div>
  )
}

export default TopBtn;