import React from 'react'
import './Products.css'
import {addtocard} from './actions'
import {useDispatch} from 'react-redux'

function Products({id,imagesrc,Product,Price}) {//props
    const dispatch=useDispatch()
    const Additemincard=()=>{
        dispatch(addtocard({id,imagesrc,Product,Price}))
    }
  return (
    <div className='product'>
        <img src={imagesrc} alt="" />
        <h3>{Product}</h3>
        <p>{Price}</p>
        <button onClick={()=>Additemincard()}>Add to Card</button>
      
    </div>
  )
}

export default Products
