import React, { useState } from 'react'
import {  useDispatch } from "react-redux";
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardTypes{
    id: string,
    name: string,
    food: string[]
}

export default function CustomerCard({id, name, food}: CustomerCardTypes ) {
  const dispatch = useDispatch();
  const [rcustomerFoodInput, setCcustomerfoodInput] =useState("")

  return (
    <div className="customer-food-card-container">
    <p>{name}</p>
    <div className="customer-foods-container">
      <div className="customer-food">
          {food.map(food => {return <p>{food}</p>})}
      </div>
      <div className="customer-food-input-container">
        <input value={rcustomerFoodInput} onChange={(e)=> setCcustomerfoodInput(e.target.value)} />
        <button onClick={() => {
            if (!rcustomerFoodInput)return;
             dispatch(addFoodToCustomer({id, food: rcustomerFoodInput}))
             setCcustomerfoodInput("")
             }} >Add</button>
      </div>
    </div>
  </div>
  )
}
