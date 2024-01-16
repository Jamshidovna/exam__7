import React from 'react'
import Check from '../img/check.svg'

export default function Check_up() {
  return (
    <div className='mt-20 container'>
        <hr />
        <h1 className='text-3xl font-semibold text-gray-500 mt-7'>Чек</h1>
        <div className='flex gap-28 justify-evenly mt-5'>
        <h1>Стандартный</h1>
        <h1>Кастомный</h1>
        <h1>VIP</h1>
        </div>
        <div className='flex justify-between '>
            <img src={Check} alt="check" />
            <img src={Check} alt="check" />
            <img src={Check} alt="check" />
        </div>

    </div>
  )
}
