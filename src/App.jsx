import { useEffect } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'

// import Home from './pages/Home'




import Company from './pages/Company'
import Magazin from './pages/Magazin'

import StoreRivera from './pages/StoreRivera'
import Kassa from './pages/Kassa'
import Check from './pages/Check'
import Valyuta from './pages/Valyuta'
import Tovar from './pages/Tovar'
import Profil from './pages/Profil'
import Sidebar from './components/Sidebar'
import { useGlobalContext } from './context'


function App() {

 const {user,list} = useGlobalContext();

useEffect(()=>{
  localStorage.setItem('users', JSON.stringify(user))
  localStorage.setItem('lists', JSON.stringify(list))
},[user])

  return (
   <>
   <Sidebar>
   <Routes>
    
    {/* <Route path='/home' element={<Home/>}/> */}
    <Route path='/profil' element={<Profil/>}/>
    <Route path='/company' element={<Company/>}/>
    <Route path='/magazin' element={<Magazin/>}/>
    <Route path='/check' element={<Check/>}/>
    <Route path='/kassa' element={<Kassa/>}/>
    <Route path='/valyuta' element={<Valyuta/>}/>
    <Route path='/tovar' element={<Tovar/>}/>
    <Route path='/magazin/magazin' element={<StoreRivera/>}/>
   </Routes>
   </Sidebar>
   
   </>
  )
}

export default App


