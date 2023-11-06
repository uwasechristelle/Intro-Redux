import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {

  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Initial cakes:  {numOfCakes}</h1>
      <button onClick={() => dispatch(ordered(2))} >Order</button>
      <button onClick={() => dispatch(restocked() )}>Add stock</button>
      </div>
  )
}

export default CakeView