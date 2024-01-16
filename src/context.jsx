// Context.jsx
import React, { createContext, useContext, useState } from 'react'
import getStore from './utils/get'
import { useNavigate } from 'react-router-dom'


const UserContext = createContext()
export function UserProvider({ children }) {

  const id=new Date().getTime().toString().slice(-5,-1)

  
  const navigate=useNavigate();
  const [bankAccounts, setBankAccounts] = useState(['', '']);
  const [phoneNumbers, setPhoneNumbers] = useState(['']); 
  const [store,setStore]=useState('');
  const [password, setPassword] = useState('');
  const [list,setList]=useState(getStore('lists'));
  const [user, setuser] = useState(getStore('users'));
  const [task, setTask] = useState('');
  const [pr,setPr]=useState("");
  const[davlat,setDavlat] = useState('');
  const [kvadrat,setKvadrat] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [InstagramUsername, setInstagramUsername] = useState('');
  const [facebookUsername, setFacebookUsername] = useState('');
  const [siteLink, setSiteLink] = useState('');
  const [emailIndex,setEmailIndex] = useState('');
  const [name, setName] = useState('');
  const [bank, setBank] = useState('');
  console.log(kvadrat)
  console.log(davlat)





  const [isToggleOn, setIsToggleOn,
    isToggleOn1, setIsToggleOn1,
    isToggleOn2, setIsToggleOn2,
    isToggleOn3, setIsToggleOn3,
    isToggleOn4, setIsToggleOn4,
    isToggleOn5, setIsToggleOn5,
    isToggleOn6, setIsToggleOn6,
    ] = useState(false);

    const [enabled,setEnabled] =useState('')
  
 

    const handleChange2 = (index, value) => {
      const updatedAccounts = [...bankAccounts];
      updatedAccounts[index] = value;
      setBankAccounts(updatedAccounts);
    };

    const addInput2 = () => {
      if(bankAccounts.length<2){
        setBankAccounts([...bankAccounts, '']);
      }
  
    };

    const removeInput2 = (index) => {
      if (bankAccounts.length > 1) {
        const updatedAccounts = [...bankAccounts];
        updatedAccounts.splice(index, 1);
        setBankAccounts(updatedAccounts);
      }
    };
 

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

const handlesubmit2 = (e) => {
  e.preventDefault();

 
};

const handleChange = (index, value) => {
  const newPhoneNumbers = [...phoneNumbers];
  newPhoneNumbers[index] = value;
  setPhoneNumbers(newPhoneNumbers);
};
const addInput = () => {
  if (phoneNumbers.length<2) {
    setPhoneNumbers([...phoneNumbers, '']);
  }
};
const removeInput = (index) => {
  const newPhoneNumbers = [...phoneNumbers];
  newPhoneNumbers.splice(index, 1);
  setPhoneNumbers(newPhoneNumbers);
};
const handlesubmit = (e) => {
  e.preventDefault();

  console.log('Phone Numbers:', phoneNumbers);
 
};





const addPage=()=>{
navigate("/magazin/magazin")
}
  
  
  const addPage2=()=>{
    navigate('/magazin')
  }

  
  const checks = store !== '' && kvadrat !== '' && InstagramUsername !== '' && facebookUsername !== '' && telegramUsername !== '' && siteLink !== '' && name !== '' && davlat !== '' && emailIndex !== '' && bank !== '';
  console.log(checks)


  const addLocalStorage = () => {
      const obj = {

        phoneNumbers,
        username: name,
        kvadrat,
        insagram_link: InstagramUsername,
        facebook_link: facebookUsername,
        siteLink,
        telegramUsername,
        davlat,
        emailIndex,
        bank,
        name:store

      }

      const arr = JSON.parse(localStorage.getItem('data')) || [];
             arr.push(obj);
             localStorage.setItem('data', JSON.stringify(arr));
             navigate('/magazin');

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
        setEnabled,
        removeInput,
        handleChange,
        addInput, 
        handlesubmit2,
        removeInput2 ,
        addInput2,
        handleChange2,
        bankAccounts,
        setBankAccounts,
        phoneNumbers,
        setPhoneNumbers,
        handlesubmit,
        kvadrat,
        setKvadrat,
        davlat,
        setDavlat,
        telegramUsername,
        setTelegramUsername,
        facebookUsername,
        setFacebookUsername,
        InstagramUsername,
        setInstagramUsername,
        name,
        setName,
        bank,
        setBank,
        siteLink,
        setSiteLink,
       emailIndex,
       setEmailIndex,
        checks,
        addLocalStorage
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(UserContext)
}



