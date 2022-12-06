import React ,{useEffect} from 'react'
import './Card.css'
import {useDispatch} from 'react-redux'
import {addtocard,deletefrombasket} from './actions'
import {v4 as uuidv4} from 'uuid'

function Card({id,imagesrc,Product,Price}) {
    const dispatch=useDispatch()
    const deletefromcard=(value)=>{
        dispatch(deletefrombasket(value))
    }
    const addtobasket=()=>{
        dispatch(addtocard({id:uuidv4(),imagesrc,Product,Price}))
    }

  return (
    <div className='carditem' idofitem={id} >
      <img src={imagesrc} alt=""/>
      <div className='productdetails'>
        <h3>{Product}</h3>
        <p>{Price}</p>
         </div>
         <div className='cardbuttons'>
            <button onClick={()=> addtobasket()}>ADD TO BASKET</button>
            <button onClick={()=> deletefromcard()}>DELETE</button>


         </div>
    </div>
  )
}

export default Card
