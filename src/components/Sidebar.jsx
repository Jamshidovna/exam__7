import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/billz-logo.svg'
import list from '../img/sidebar-list.svg'

export default function Sidebar({children}) {

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
    <div className='container mx-auto '>
  <div className='flex'>
    <div className='w-80 bg-gray-100 fixed  h-screen '>
      <div className='flex items-center py-5 px-7'>
        <div>
          <div>
            <img src={logo} alt='logo' />
          </div>
          <div className='w-96 mt-11'>
            <img src={list} alt="img" />
          </div>
        </div>
      </div>

      {menuItem.map((item, index) => (
        <NavLink to={item.path} key={index} className='text-base text-gray-600 mt-4'>
          <div className='px-7 font-semibold py-3 hover:text-blue-500 hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 focus:text-blue-500 text-xl'>{item.name}</div>
        </NavLink>
      ))}

      <div className='flex gap-3 px-7 mt-20'>
        <button className='rounded-full bg-blue-500 text-white px-3 py-2'>ДО</button>
        <h1 className='text-gray-500 text-base font-semibold'>Достонхон <br />Озодходжаев</h1>
      </div>
    </div>

    <main className=' ml-[380px] w-full p-5 '>{children}</main>
  </div>
</div>

        
    
    
  )
}