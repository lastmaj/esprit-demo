import React, { useState } from 'react'
import './Product.css'

const Product = (props) => {
  // state
  const [checked, setChecked] = useState(false)

  // classname
  let c = 'product'
  if (props.qty < 10) c = 'product danger'

  // event handler
  const clickHandler = () => {
    setChecked(!checked)
  }

  return (
    <div className={c}>
      <p>{props.name}</p>
      <p>{props.price} $</p>
      {props.price > 100 && <p>produit de luxe</p>}
      <p>{props.qty}</p>
      {checked && <p>checked</p>}
      <button onClick={clickHandler}>Buy</button>
    </div>
  )
}

export default Product
