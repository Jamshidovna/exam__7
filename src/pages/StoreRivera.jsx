import React from 'react'
import Store from '../img/store.svg'
import { useTheme } from '../contexts/ThemeContext'
import { useGlobalContext } from '../context'
import Contact from '../components/Contact'
import Rekvizit from '../components/Rekvizit'
import Cash from '../components/Cash'
import Check_up from '../components/Check_up'

export default function StoreRivera() {

    const { darkMode } = useTheme()
    const {addPage2,
        isToggleOn, setIsToggleOn,
        isToggleOn1, setIsToggleOn1,
        isToggleOn2, setIsToggleOn2,
        isToggleOn3, setIsToggleOn3,
        isToggleOn4, setIsToggleOn4,
        isToggleOn5, setIsToggleOn5,
        isToggleOn6, setIsToggleOn6,
        setStore, store,
        kvadrat, setKvadrat,
        checks,
        addLocalStorage

        } = useGlobalContext()

  return (
    <div>
        <div>
            <div className='flex gap-[400px] mt-11 mb-8 '>
            <div className='flex items-center gap-4  '>
                <button onClick={addPage2} className='px-3.5 py-3 bg-gray-100 border rounded-full'>
                <img src={Store} alt="img" />
            </button>
            
            <h1 className='font-semibold text-4xl'><span className='text-gray-200 '>Магазин</span> Store Riviera</h1>
            </div>
            <div className='flex gap-4'>
            <button className={` px-5 py-4 bg-gray-100 rounded-s-2xl rounded-e-2xl ${darkMode ? 'bg-gray-700 text-white' : ''}`}>Сбросить</button>
            <button disabled={checks} onClick={addLocalStorage} className={ `${checks ? 'bg-gray-700' : 'bg-blue-500'} px-5 py-2  rounded-s-2xl rounded-e-2xl text-gray-400 font-semibold`}>Сохранить</button>
            </div>
           
            </div>
        </div>
        <hr />
        <div >
        <div className='flex mt-8 '>
            <h1 className='w-[400px] text-gray-500 font-semibold text-3xl'>Основные</h1>
            <div>
                <div className='flex gap-9 '>
                <div >
                    <h1 className='text-gray-500 font-semibold'>Наименование</h1>
                    <input type="text" className={`border-b-[1px] mt-3 px-16 py-4 font-semibold rounded-s-2xl rounded-e-2xl placeholder:text-gray-600  ${darkMode ? 'bg-gray-700' : ' bg-gray-100'}`}
                    name='store'
                    value={store}
                    onChange={(e) =>{setStore(e.target.value)}}/>
                </div>
                <div>
                    <h1 className='text-gray-500 font-semibold'>Квадратура</h1>
                    <input type="text" className={`border-b-[1px] mt-3 px-16 py-4 font-semibold rounded-s-2xl rounded-e-2xl    ${darkMode ? 'bg-gray-700 placeholder:text-gray-300' : ' bg-gray-100 placeholder:text-gray-600'}`}
                    name='store'
                    placeholder='Введите квадратуру    м2'
                    value={kvadrat}
                    onChange={(e) => setKvadrat(e.target.value)}/>
                </div>
                </div>
                <h1 className='text-gray-500 mt-12 font-semibold text-xl'>Режим работы</h1>

                <div className={`w-[720px]  h-20 rounded-s-2xl rounded-e-2xl mt-4 flex gap-12 border hover:border-blue-700 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}>
                 <div className='flex justify-between gap-12'>
                    <div className='  w-40  text-gray-600 text-xl pt-6 px-6'>
                    <h1>Понедельник</h1>
                    </div>
                    <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                    <h1>Открытие:</h1>
                    <h1>XX:XX</h1>
                    </div>
                    <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                    <h1>Закрытие:</h1>
                    <h1>XX:XX</h1>
                    </div>
                 </div>
                   <div>
                    <button className=' py-6 px-6 '>
                    <div className="relative flex flex-col items-center justify-center ">
             <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isToggleOn}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setIsToggleOn(!isToggleOn);
                        }}
                        className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
             </div>
             </div>
                    </button>
                    </div>
                </div>

                <div className={`w-[720px]  h-20 rounded-s-2xl rounded-e-2xl mt-4 flex gap-12 border hover:border-blue-700 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}>
                   <div className='flex justify-between gap-12'>
                      <div className=' w-40  text-gray-600 text-xl pt-6 px-6'>
                      <h1>Вторник</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Открытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Закрытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                   </div>
                     <div>
                        <button className=' py-6 px-6'>
                        <div className="relative flex flex-col items-center justify-center overflow-hidden">
             <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isToggleOn1}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setIsToggleOn1(!isToggleOn1);
                        }}
                        className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
             </div>
             </div>
                        </button>
                        </div>
                  </div>

                  <div className={`w-[720px]  h-20 rounded-s-2xl rounded-e-2xl mt-4 flex gap-12 border hover:border-blue-700 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}>
                   
                   <div className='flex justify-between gap-12'>
                      <div className='  w-40  text-gray-600 text-xl pt-6 px-6'>
                      <h1>Среда</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Открытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Закрытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                   </div>
                     <div><button className=' py-6 px-6'>
                     <div className="relative flex flex-col items-center justify-center overflow-hidden">
             <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isToggleOn2}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setIsToggleOn2(!isToggleOn2);
                        }}
                        className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
             </div>
             </div>
                        </button>
                        </div>
                  </div>

                  <div className={`w-[720px]  h-20 rounded-s-2xl rounded-e-2xl mt-4 flex gap-12 border hover:border-blue-700 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}>
                   <div className='flex justify-between gap-12'>
                      <div className=' w-40  text-gray-600 text-xl pt-6 px-6'>
                      <h1>Четверг</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Открытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Закрытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                   </div>
                     <div><button className=' py-6 px-6'>
                     <div className="relative flex flex-col items-center justify-center overflow-hidden">
             <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isToggleOn3}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setIsToggleOn3(!isToggleOn3);
                        }}
                        className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
             </div>
             </div>
                        </button></div>
                  </div>

                  <div className={`w-[720px]  h-20 rounded-s-2xl rounded-e-2xl mt-4 flex gap-12 border hover:border-blue-700 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}>
                   <div className='flex justify-between gap-12'>
                      <div className='w-40  text-gray-600 text-xl pt-6 px-6'>
                      <h1>Пятница</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Открытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Закрытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                   </div>
                     <div><button className=' py-6 px-6'>
                     <div className="relative flex flex-col items-center justify-center overflow-hidden">
             <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isToggleOn4}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setIsToggleOn4(!isToggleOn4);
                        }}
                        className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
             </div>
             </div>
                        </button>
                        </div>
                  </div>

                  <div className={`w-[720px]  h-20 rounded-s-2xl rounded-e-2xl mt-4 flex gap-12 border hover:border-blue-700 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}>
                   <div className='flex justify-between gap-12'>
                      <div className=' w-40  text-gray-600 text-xl pt-6 px-6'>
                      <h1>Суббота</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Открытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Закрытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                   </div>
                     <div ><button className=' py-6 px-6 '>
                     <div className="relative flex flex-col items-center justify-center overflow-hidden">
             <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isToggleOn5}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setIsToggleOn5(!isToggleOn5);
                        }}
                        className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
             </div>
             </div>
                        </button></div>
                  </div>

                  <div className={`w-[720px]  h-20 rounded-s-2xl rounded-e-2xl mt-4 flex gap-12 border hover:border-blue-700 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}>
                   <div className='flex justify-between gap-12'>
                      <div className=' w-40  text-gray-600 text-xl pt-6 px-6'>
                      <h1>Воскресенье</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Открытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                      <div className='flex gap-5 text-gray-400 text-xl pt-6'>
                      <h1>Закрытие:</h1>
                      <h1>XX:XX</h1>
                      </div>
                   </div>
                     <div>
                        <button className=' py-6 px-6'>
                        <div className="relative flex flex-col items-center justify-center overflow-hidden">
             <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isToggleOn6}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setIsToggleOn6(!isToggleOn6);
                        }}
                        className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    ></div>
                    </label>
             </div>
             </div>
                        </button>
                        </div>
                  </div>

                  
                  

            </div>




        </div>
           
        </div>
        <Cash/>
        <Check_up/>
        <Contact/>
        <Rekvizit/>
    </div>
   
    
  )
};



