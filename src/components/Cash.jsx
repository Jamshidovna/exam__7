import React, { useState } from 'react'
import line from '../img/line.svg'



export default function Cash() {
  
 const[enabled,setEnabled] = useState(false)

  return (
    <div className='mt-20'>
        <hr />
 
        <div className='flex gap-72 mt-5' >
        <h1 className='text-3xl font-semibold text-gray-500 mt-7'>Кассы</h1>

        <div className='mt-5'>
        <img className='w-[1200px]' src={line} alt="line" />
       <div className='flex justify-between'>
       <h1 className='text-gray-400 text-xl px-8 mt-3'>Касса</h1>
       <h1 className='text-gray-400 text-xl px-8 mt-3'>Статус</h1>
       </div>
        <div className='mt-5'>
        <img className='w-[1200px]' src={line} alt="line" />
        </div>
        <div className='px-7'>
        <div className='w-[720px] bg-gray-100 h-20 rounded-s-2xl rounded-e-2xl mt-4 flex gap-12'>
                 <div className='flex gap-96'>
                    <div className=' text-gray-700 text-xl pt-6 px-6'>
                    <h1>Cashbox Riviera</h1>
                    </div>
                    
                    <div>
                    <button className=' py-6 px-6 '>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
             <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                        />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
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

               <div className='mt-4'>
               <img className='w-[1200px]' src={line} alt="line" />
               </div>
        </div>
           
        </div>
       

          

    </div>
  )
}
