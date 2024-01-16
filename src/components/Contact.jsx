// Contact.jsx
import React from 'react'
import { useGlobalContext } from '../context'
import Delete from '../img/delete_icon.svg'
import { useTheme } from '../contexts/ThemeContext'

export default function Contact() {

  const { darkMode } = useTheme();

    const{phoneNumbers,
        removeInput,
        handlesubmit ,
        addInput,
        handleChange,
        telegramUsername, setTelegramUsername,
        facebookUsername, setFacebookUsername,
        siteLink, setSiteLink,
        InstagramUsername, setInstagramUsername

        } = useGlobalContext()

  return (
    <div className='mt-20 '>
        <hr />
       <div className='flex gap-40'>
       <h1 className='text-3xl font-semibold text-gray-500 mt-5'>Контакты</h1>
       <div className='font-semibold text-gray-500 mt-6 text-2xl'>
        <h1>Телефоны</h1>
        <div> 
                   

            <div className='mt-10'>
                    
                <form action="" className='w-180' onSubmit={handlesubmit}>
                <div className='flex gap-8'>
                {phoneNumbers.map((phoneNumber, index) => (
          <div key={index} className='relative'>
            <input
              type="text"
              className={`border w-[320px] px-4 py-4  focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600 ${darkMode ? 'bg-gray-700 ' : 'bg-gray-100'}`}
              placeholder={`+998 XX XXX XX XX `}
              value={phoneNumber}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            {index === 1 && (
              <button
                type="button"
                className='absolute right-[1px]'
                onClick={() => removeInput(index)}
              >
                <img className='mt-3  ml-64' src={Delete} alt="delete" />
              </button>
            )}
          </div>
        ))}
                </div>
                    <button className={`border w-[320px] px-3 py-4  mt-4 rounded-s-2xl rounded-e-2xl text-blue-500 font-semibold text-xl hover:border-blue-600 ${darkMode ? 'bg-gray-700 ' : 'bg-gray-100'}`} onClick={addInput}>
                        + Добавить телефон
                   </button>
                </form>
                </div>
  
                

                </div>

              

                 <div className='flex gap-10 mt-8'>
                <div>
                    <h1 className='font-semibold text-gray-500 mt-10 text-xl'>Facebook</h1>
                    <input type="text" className={` border-b-[1px] mt-4 px-11 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-300 placeholder:text-xl ${darkMode ? 'bg-gray-700 text-white' : ''}`}
                    placeholder='Название страницы'
                    value={facebookUsername}
                    onChange={(e) => setFacebookUsername(e.target.value)}/>
                </div>

                <div>
                    <h1 className='font-semibold text-gray-500 mt-10 text-xl'>Instagram</h1>
                    <input type="text" className={` border-b-[1px] mt-4 px-11 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-300 placeholder:text-xl ${darkMode ? 'bg-gray-700 text-white' : ''}`} 
                    placeholder='@ Юзернейм'
                    value={InstagramUsername}
                    onChange={(e) => setInstagramUsername(e.target.value)}/>
                </div>
                 </div>

                 <div className='flex gap-10 mt-8'>
                 <div>
                        <h1 className='font-semibold text-gray-500 mt-10 text-xl'>Telegram</h1>
                        <input type="text" className={` border-b-[1px] mt-4 px-11 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-300 placeholder:text-xl ${darkMode ? 'bg-gray-700 text-white' : ''}`}
                        placeholder='@ Юзернейм'
                        value={telegramUsername}
                        onChange={(e) => setTelegramUsername(e.target.value)}/>
                    </div>
                    <div>
                        <h1 className='font-semibold text-gray-500 mt-10 text-xl'>Сайт</h1>
                        <input type="text" className={` border-b-[1px] mt-4 px-11 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-300 placeholder:text-xl ${darkMode ? 'bg-gray-700 text-white' : ''}`}
                        placeholder='Ссылка на сайт'
                        value={siteLink}
                        onChange={(e) => setSiteLink(e.target.value)}/>
                    </div>
                     </div>
       </div>
       </div>
    </div>
  )
}


