// App.jsx
import { useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import Account from './pages/Profil'
import { ThemeProvider } from './contexts/ThemeContext'


function App() {

 const {user,list,darkMode} = useGlobalContext();
 

useEffect(()=>{
  localStorage.setItem('users', JSON.stringify(user))
  localStorage.setItem('lists', JSON.stringify(list))
},[user])

  return (
   <>
 <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
 <ThemeProvider>


<Sidebar>
<Routes>
 <Route path='/profil' element={<Account/>}/>
 <Route path='/company' element={<Company/>}/>
 <Route path='/magazin' element={<Magazin/>}/>
 <Route path='/check' element={<Check/>}/>
 <Route path='/kassa' element={<Kassa/>}/>
 <Route path='/valyuta' element={<Valyuta/>}/>
 <Route path='/tovar' element={<Tovar/>}/>
 <Route path='/magazin/magazin' element={<StoreRivera/>}/>
</Routes>
</Sidebar>



</ThemeProvider>
 </div>
   
   
   
   </>
  )
}

export default App