import React from 'react'
import { useGlobalContext } from '../context'
import Search from '../img/search.svg'




export default function Magazin() {
 const{setStore, addPage} = useGlobalContext()
  return (
    <div>
      <h1 className='text-4xl font-semibold px-4 py-11'>Настройки магазинов</h1>
      <hr />
      <div className='flex items-center gap-8 relative mt-9 mb-9'>
      <form>
      <img src={Search} alt="search" className='absolute left-4 top-[19px]' />
        <input className=' py-4 px-11  rounded-s-2xl rounded-e-2xl border w-[780px] border-none bg-gray-100 focus:outline-none placeholder:font-semibold'
        type="text" 
        name='search'
        onChange={(e)=>setStore(e.target.value)}
        placeholder='Название магазина'
        />
      </form>
      <button onClick={addPage} className='flex gap-4 items-center text-white px-4 py-4 rounded-s-2xl rounded-e-2xl font-semibold bg-blue-500'>
         
        + Новый магазин
        </button>
      </div>
      <hr />
      <div className='flex items-center gap-[350px] px-8 py-4 text-gray-400 font-semibold'>
        <h1>Магазин</h1>
        <h1>Кол-во касс</h1>
        <h1>Действие</h1>
      </div>
      <hr />
     
    </div>
  )
}