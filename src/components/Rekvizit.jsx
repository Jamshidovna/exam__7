import React from 'react'
import { Select,Option } from '@material-tailwind/react';
import { useCountries } from 'use-react-countries'
import { useGlobalContext } from '../context';
import Delete from '../img/delete_icon.svg'
import { useTheme } from '../contexts/ThemeContext'


export default function Rekvizit() {

  const { darkMode } = useTheme();

  const {removeInput,
    handlesubmit2,
    removeInput2 ,
    addInput2,
    handleChange2,
    bankAccounts,
    name, setName,
    davlat, setDavlat,
    emailIndex,setEmailIndex,
    bank, setBank
  } = useGlobalContext()

    const {countries} =useCountries();
  return (
    <div className='mt-20 container'>
        <hr />
        <div className='flex gap-40  '>  
        <h1 className='text-3xl font-semibold text-gray-500 mt-8 '>Реквизиты</h1>
          
          <div>
          <div className='flex justify-between gap-16'>
                <div>
                    <h1 className='font-semibold text-gray-500 mt-10 text-xl '>Магазин имеет уникальные реквизиты</h1>
                    <div className={`mt-4 w-96 h-14 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black ${darkMode ? 'bg-gray-700 text-white' : ''}`}>
                    
                    <label for="Toggle3" className='inline-flex items-center p-2 rounded-md cursor-pointer text-gray-800  '>
	<input id="Toggle3" type="checkbox" className="hidden peer" />
	<span className={`py-2 px-20 rounded-s-2xl rounded-e-2xl text ${darkMode ? 'peer-checked:bg-gray-400 bg-gray-700' : ' bg-white peer-checked:bg-gray-100'}`}>Да</span>
	<span className={`px-20 py-2 rounded-s-2xl rounded-e-2xl  ${darkMode ? 'peer-checked:bg-gray-700 bg-gray-400' : ' bg-gray-100 peer-checked:bg-white'}`}>Нет</span>
</label>
                    </div>


                    
                    


                </div>

                <div>
                    <h1 className='font-semibold text-gray-500 mt-10 text-xl '>Юридическое название компании</h1>
                    <form >
                    <input type="text" className={` border-b-[1px] mt-4 px-20 py-4 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-400 placeholder:text-xl ${darkMode ? 'bg-gray-700 text-white' : ''}`}
                    placeholder='Введите название'
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                    </form>
                </div>
                 </div>

                 <h1 className='font-semibold text-gray-500 mt-16 text-xl'>Юридический адрес</h1>
                 <form className='w-[755px] mt-4'>
                 <input type="text" className={`border-[1px] w-full rounded-s-2xl rounded-e-2xl px-4 py-4 bg-gray-100 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 ${darkMode ? 'bg-gray-700 text-white' : ''}`}
                        placeholder='Введите банковский счет '
                        value={davlat}
                        onChange={(e) => setDavlat(e.target.value)}
                        />
                 </form>


                 <div className="flex gap-32 ">
      <div>
      <Select
        className={`border rounded-2xl mt-9  placeholder: text-black  bg-gray-100 pb-8 w-80 h-14 ${darkMode ? 'bg-gray-700 text-white' : ''} `}
        placeholder="Select Country"
        selected={(element) =>
        element &&
        React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center   px-5 gap-2 pointer-events-none",
          })
        }
      >
        {countries.map(({ name, flags }) => (
          <Option key={name} value={name} className="flex items-center gap-2">
            <img
              src={flags.svg}
              alt={name}
              className=" h-5 w-5 rounded-full object-cover"
            />
            {name}
          </Option>
        ))}
      </Select>
      </div>

      <form >
         <input type="text" className={`border px-16 py-4 mt-9 rounded-s-2xl rounded-e-2xl bg-gray-100 text-black  placeholder:text-gray-400 placeholder:text-xl ${darkMode ? 'bg-gray-700 text-white' : ''}`} 
          placeholder='Введите название'
          value={emailIndex}
          onChange={(e) =>setEmailIndex(e.target.value)}/>
      </form>

    </div>
       
       
       <div>
                    <h1 className='font-semibold text-gray-500 mb-4 mt-8 text-xl'>Банковский счет</h1>
                  
                       
                    <form action="" onSubmit={handlesubmit2} className='w-[755px]'>
                        {bankAccounts.map((account, index) => (
                         <div key={index} className='relative'>
                        <input
                         type="text"
                             className={`border-b-[1px] w-full rounded-t-2xl rounded-b-2xl  px-4 py-4 bg-gray-100 focus:outline-none placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 mb-8 ${darkMode ? 'bg-gray-700 text-white' : ''}`}
                             placeholder='  Введите банковский счет'
                             value={account}
                            onChange={(e) => handleChange2(index, e.target.value)}
                            />
                            {index >= 1 && (
                        <button
                         type="button"
                         className='absolute right-4'
                        onClick={() => removeInput2(index)}>
                         <img className='mt-2 ml-96' src={Delete} alt="delete" />
                         </button>
                         )}
                         </div>

                        ))

                        }
                         <input type="text" className={`border-b-[1px] focus:outline-none w-full rounded-t-2xl  rounded-b-2xl px-4 py-4 bg-gray-100  placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 ${darkMode ? 'bg-gray-700 text-white' : ''} `}
                        placeholder='Название банка и филиал'
                        value={bank}
                        onChange={(e) => setBank(e.target.value)}
                        />
                        



                        
                    </form>
                    <button onClick={addInput2} className={` mt-8 w-[755px] px-4 py-4 bg-gray-100 rounded-s-2xl rounded-e-2xl text-gray-400 font-semibold text-xl hover:border-blue-600 border  ${darkMode ? 'bg-gray-700 text-white hover:border-blue-600 border' : ''}`}>+ Добавить еще один банковский счет</button>
                    
                </div>


          </div>
          
                 
                 
        </div>
        
        
    </div>
  )
}
