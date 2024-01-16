import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import Search from '../img/search.svg'
import { useTheme } from '../contexts/ThemeContext'



export default function Magazin() {

const { darkMode } = useTheme();
const { addPage } = useGlobalContext();
const id = new Date().getTime().toString().slice(-5, -1);
const [input, setInput] = useState('');
const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);

console.log("Adding item with id:", id);

const filteredResults = data.filter(
  (item) =>
    item.name && item.name.toString().toLowerCase().includes(input.trim().toLowerCase())
);

const removeItem = (idToRemove) => {
  console.log("Removing item with id:", idToRemove);

  const newData = data.filter((item) => item.id !== idToRemove);

  console.log("Old data:", data);
  console.log("New data after removal:", newData);

  setData(newData);
  localStorage.setItem('data', JSON.stringify(newData));
}





  return (
    <div className='h-screen'>
      <h1 className='text-4xl font-semibold px-4 py-11'>Настройки магазинов</h1>
      <hr />
      <div className='flex items-center gap-8 relative mt-9 mb-9'>
      <form>
      <img src={Search} alt="search" className='absolute left-4 top-[19px]' />
        <input className={`py-4 px-11  rounded-s-2xl rounded-e-2xl border w-[780px] border-none bg-gray-100 focus:outline-none placeholder:font-semibold'
        type="text" 
        name='search'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='Название магазина ${darkMode ? 'bg-gray-700 text-white' : ''} `}
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
  
     

{filteredResults?.map((item) => (
  <div key={item.id} className={`flex justify-between px-5 items-center w-full mt-10 border-none bg-gray-100 py-4 rounded-s-2xl rounded-e-2xl ${darkMode ? 'bg-gray-700 text-white' : ''} `}>
    <h2 className='text-blue-500 font-semibold'>{item.name}</h2>
    <div className=''>
      <button className='px-2.5 py-2.5 rounded-lg bg-red-500' onClick={() => removeItem(item.id)}>
        <svg className='' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM11.7812 10.0625C11.9375 10.1875 11.9375 10.4375 11.7812 10.5938L10.5625 11.8125C10.4062 11.9688 10.1562 11.9688 10.0312 11.8125L8 9.75L5.9375 11.8125C5.8125 11.9688 5.5625 11.9688 5.40625 11.8125L4.1875 10.5625C4.03125 10.4375 4.03125 10.1875 4.1875 10.0312L6.25 8L4.1875 5.96875C4.03125 5.84375 4.03125 5.59375 4.1875 5.4375L5.4375 4.21875C5.5625 4.0625 5.8125 4.0625 5.96875 4.21875L8 6.25L10.0312 4.21875C10.1562 4.0625 10.4062 4.0625 10.5625 4.21875L11.7812 5.4375C11.9375 5.59375 11.9375 5.84375 11.7812 5.96875L9.75 8L11.7812 10.0625Z" fill="white" />
        </svg>
      </button>
    </div>
  </div>
))}


     
    </div>
  )
}