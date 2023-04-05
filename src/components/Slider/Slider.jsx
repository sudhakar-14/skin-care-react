import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import { Pagination,Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { SliderProducts } from '../../data/products'

import '../Slider/Slider.css'

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper slidesPerView={3}
       spaceBetween={40} 
       slidesPerGroup={1} 
       loop={true}
       breakpoints={{
        640:{
          slidesPerView:3
        },
        0:{
          slidesPerView:1
        }
       }}
      modules={[Pagination, Navigation]} className="mySwiper" navigation={true}>
        {SliderProducts.map((slide, i)=>(
          <SwiperSlide key={i}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.details}</span>
              </div>
              <span>{slide.price}₹</span>
              <div>Shop Now</div>
            </div>
            <img src={slide.img} alt="product" className='img-p' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider