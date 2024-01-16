import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/billz-logo.svg'
import list from '../img/sidebar-list.svg'
import { useTheme } from '../contexts/ThemeContext'




export default function Sidebar({children}) {

  const { darkMode, toggleDarkMode } = useTheme()
  

  const menuItem=[
    
    {
      path:'/profil',
      name:'Профиль',
    },
    {
      path:'/company',
      name:'Компания',
    },
    {
      path:'/magazin',
      name:'Магазины',
    },
    {
      path:'/kassa',
      name:'Кассы',
    },
    {
      path:'/check',
      name:'Чеки',
    },
    {
      path:'/valyuta',
      name:'Валюты и оплата',
    },
    {
      path:'/tovar',
      name:'Товары',
    }
  ] 
  return (
   
      <div className={`${darkMode ? 'bg-gray-800 text-white' : ' text-black'} container`}>
  <div className='flex'>
    <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}   fixed  h-screen w-80`}>
      <div className='flex items-center py-5 px-7'>
        <div>
          <div className='flex gap-28'>
            <img src={logo} alt='logo' />
            <div className='mt-2'>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={darkMode}
                        readOnly
                        />
                    <div
                        onClick={toggleDarkMode}
                        className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
            </div>
          </div>
          <div className='w-96 mt-11'>
            <img src={list} alt="img" />
          </div>
        </div>
      </div>

      {menuItem.map((item, index) => (
        <NavLink to={item.path} key={index} className='text-base text-gray-600 mt-4'>
          <div className={`px-7 font-semibold py-3 hover:text-blue-500 hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 focus:text-blue-500 text-xl ${darkMode ? ' text-white' : ' '} `}>{item.name}</div>
        </NavLink>
      ))}

      <div className='flex gap-3 px-7 mt-20'>
        <button className='rounded-full bg-blue-500 text-white px-3 py-2'>ДО</button>
        <h1 className={`text-gray-500 text-base font-semibold ${darkMode ? ' text-white' : ' '}`}>Достонхон <br />Озодходжаев</h1>
      </div>

      
    
       
    
 


    </div>

     
     <main className='w-full p-5 ml-[370px] overflow-hidden'>{children}</main>
    
   
  </div>


   
    
  
</div>
   

    
  )
}