import React, { createContext, useContext, useState } from 'react'
import getStore from './utils/get'
import { useNavigate } from 'react-router-dom'


const UserContext = createContext()
export function UserProvider({ children }) {

  const id=new Date().getTime().toString().slice(-5,-1)

  
  const navigate=useNavigate();

  const [list,setList]=useState(getStore('lists'))
  const [user, setuser] = useState(getStore('users'))
  const [task, setTask] = useState('')
  const [password, setPassword] = useState('')
  const [pr,setPr]=useState("")
  const [store,setStore]=useState('');
  const [isToggleOn, setIsToggleOn,
    isToggleOn1, setIsToggleOn1,
    isToggleOn2, setIsToggleOn2,
    isToggleOn3, setIsToggleOn3,
    isToggleOn4, setIsToggleOn4,
    isToggleOn5, setIsToggleOn5,
    isToggleOn6, setIsToggleOn6,
    ] = useState(false);

    const [enabled,setEnabled] =useState('')
  
 
 

const handleSubmit=(e)=>{
  e.preventDefault()
  const newItem = { title: task, password:password}
  setuser([...user, newItem])
  setPr({task:task,password:password})
  setTask('')
  setPassword('')
  navigate("/home")
};


const handleSubmit2 = (e) => {
  e.preventDefault()
  if (!store) {
    alert('bosh')
  } else {
    const newItem = { id: id, name: store }
    setList([...list, newItem]);
    setStore('');
  }
};

const removeItem = (id) => {
  const newItem = list.filter((item) => item.id !== id)
  setList(newItem)
};

const addPage=()=>{
navigate("/magazin/magazin")
}
  
  
  const addPage2=()=>{
    navigate('/magazin')
  }


  
  

  return (
    <UserContext.Provider
      value={{
        user,
        setuser,
        handleSubmit,
        task,
        setTask,
        password,
        setPassword,
        pr,
        setPr,
        store,
        setStore,
        list,
        setList,
        handleSubmit2,
        removeItem,
        addPage,
        addPage2, 
        isToggleOn, 
        setIsToggleOn,
        isToggleOn1, 
        setIsToggleOn1,
        isToggleOn2, 
        setIsToggleOn2,
        isToggleOn3, 
        setIsToggleOn3,
        isToggleOn4, 
        setIsToggleOn4,
        isToggleOn5, 
        setIsToggleOn5,
        isToggleOn6, 
        setIsToggleOn6,
        enabled,
        setEnabled
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(UserContext)
}