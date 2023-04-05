import React from 'react'
import css from './Testimonials.module.css'
import Hero from '../../img/testimonialHero.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {testimonials, TestimonialsData} from '../../data/testimonials'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>
        </div>
        <img src={Hero} alt="TestimonialHero" />
        <div className={css.container}>
          <span>100k</span>
          <span>Happy customers with us</span>
        </div>
      </div>
      <div className={css.reviews}>Reviews</div>
      <div className={css.carousel}>
      <Swiper className={css.tcarousel} 
      slidesPerView={3} 
      slidesPerGroup={1} 
      spaceBetween={20}
      breakpoints={{
        856:{
        slidesPerView:3
      },
        640:{
          slidesPerView:2
        },
        0:{
          slidesPerView:1
        }
    }}
      >
        {
          TestimonialsData.map((testimonial, i) =>(
            <SwiperSlide key={i}>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="avatar" />
                <span>{testimonial.comment}</span>
                <hr/>
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonials