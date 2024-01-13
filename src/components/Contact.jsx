import React from 'react'

export default function Contact() {
  return (
    <div className='mt-20'>
        <hr />
       <div className='flex gap-36'>
       <h1 className='text-3xl font-semibold text-gray-500 mt-5'>Контакты</h1>
       <div className='font-semibold text-gray-500 mt-6 text-2xl'>
        <h1>Телефоны</h1>
        <div> 
                    <form >
                    <input type="text" className='mt-4 px-11 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-300 placeholder:text-xl' 
                    placeholder='+998 XX XXX XX XX'/>
                    </form>
                </div>

                <button className='mt-8 px-24 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 border text-blue-500 font-semibold text-xl hover:border-blue-600 '>
                    <h1> + Добавить телефон</h1>
                </button>

                 <div className='flex gap-10 mt-8'>
                <div>
                    <h1 className='font-semibold text-gray-500 mt-10 text-xl'>Facebook</h1>
                    <input type="text" className='mt-4 px-11 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-300 placeholder:text-xl' 
                    placeholder='Название страницы'/>
                </div>

                <div>
                    <h1 className='font-semibold text-gray-500 mt-10 text-xl'>Instagram</h1>
                    <input type="text" className='mt-4 px-11 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-300 placeholder:text-xl' 
                    placeholder='@ Юзернейм'/>
                </div>
                 </div>

                 <div className='flex gap-10 mt-8'>
                 <div>
                        <h1 className='font-semibold text-gray-500 mt-10 text-xl'>Telegram</h1>
                        <input type="text" className='mt-4 px-11 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-300 placeholder:text-xl' 
                        placeholder='@ Юзернейм'/>
                    </div>
                    <div>
                        <h1 className='font-semibold text-gray-500 mt-10 text-xl'>Сайт</h1>
                        <input type="text" className='mt-4 px-11 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-300 placeholder:text-xl' 
                        placeholder='Ссылка на сайт'/>
                    </div>
                     </div>
       </div>
       </div>
    </div>
  )
}
