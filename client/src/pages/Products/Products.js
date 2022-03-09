import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import './Products.scss';


function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const [sale, setSale] = useState(false);

  const priceComma = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant='dark' activeIndex={index} onSelect={handleSelect} indicators={false} interval={null}>
      <Carousel.Item interval={1000}>
        <div className='product-content'>
          {props.productData.map(element => {
            return (
              <div className='product-item'>
                <div className='product-details'>
                  <div className='image'>
                    <Link to='#'>
                      <img src={element[0]} alt='product image' className='product-image'/>
                    </Link>
                    <img src='../../product-cart-img.jpg' alt='cart image' className='cart-image'/>
                  </div>
                  <div className='info'>
                    <div className='name'>
                      <Link to='#'>
                        {element[1]}
                      </Link>
                    </div>
                    {sale ?
                      <div className='sale'>
                        <div className='detail'>
                          <div className='discount-rate'>
                            {element[2]}%
                          </div>
                          <div className='discount-price'>
                            {priceComma(element[3])}원
                          </div>
                        </div>
                        <div className='original-price'>
                          {priceComma(element[4])}원
                        </div>
                      </div> :
                      <div className='not-sale'>
                        <div className='original-price'>
                          {priceComma(element[4])}원
                        </div>
                      </div>
                    }
                  </div>
                </div>  
              </div>
            )
          })}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='product-content'>
          {props.productData2.map(element => {
            return (
              <div className='product-item'>
                <div className='product-details'>
                  <div className='image'>
                    <Link to='#'>
                      <img src={element[0]} alt='product image' className='product-image'/>
                    </Link>
                    <img src='../../product-cart-img.jpg' alt='cart image' className='cart-image'/>
                  </div>
                  <div className='info'>
                    <div className='name'>
                      <Link to='#'>
                        {element[1]}
                      </Link>
                    </div>
                    {sale ?
                      <div className='sale'>
                        <div className='detail'>
                          <div className='discount-rate'>
                            {element[2]}%
                          </div>
                          <div className='discount-price'>
                            {priceComma(element[3])}원
                          </div>
                        </div>
                        <div className='original-price'>
                          {priceComma(element[4])}
                        </div>
                      </div> :
                      <div className='not-sale'>
                        <div className='original-price'>
                          {priceComma(element[4])}
                        </div>
                      </div>
                    }
                  </div>
                </div>  
              </div>
            )
          })}
        </div>
      </Carousel.Item>
    </Carousel>
  );
}


function Products(props) {
  const [productData, setProductData] = useState([])
  const [productData2, setProductData2] = useState([])

  // useEffect(() => {
  //   axios.post('products/random-items', { params: { title: props.title } })
  //   .then((response) => {
  //     setProductData(response.data.slice(0,5))
  //     setProductData2(response.data.slice(5))
  //   })
  //   .catch((error) => { console.log(error)})
  // })

  return (
    <div className='product-container'>
      <div className='title'>
        {props.title}
      </div>
      <div className='image-container'>
        <ControlledCarousel productData={productData} productData2={productData2} />
      </div>
    </div>
  )
}

export default Products