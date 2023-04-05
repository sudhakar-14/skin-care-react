import React, { useState } from 'react'
import css from './Products.module.css'
import Plane from '../../img/plane.png'
import { SliderProducts } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
  const[parent] = useAutoAnimate()
  const [MenuProducts, setMenuProducts] = useState(SliderProducts)
  
  const filter = (type) =>{
    setMenuProducts(SliderProducts.filter((product) => product.type === type))
  }
  return (
    <div className={css.container}>
      <img src={Plane} alt="plane" />
      <h1>Our Feature Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(SliderProducts)}>All</li>
          <li onClick={() => filter("Skin Care")}>Skin Care</li>
          <li onClick={() => filter("Conditioners")}>Conditioners</li>
          <li onClick={() => filter("Foundations")}>Foundations</li>
        </ul>
        <div className={css.list} ref={parent}>
          {
            MenuProducts.map((product,i) =>(
              <div key={i} className={css.product}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.details}</span>
                  </div>
                  <span>{product.price}₹</span>
                  <div>Shop Now</div>
                </div>
                <img src={product.img} alt="" className='img-p'/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Products