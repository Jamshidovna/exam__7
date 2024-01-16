// import React, { useEffect, useState } from 'react';

// const DarkModeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const darkMode = localStorage.getItem('darkmode');

//     if (darkMode === null) {
//       // if dark mode was never activated
//       setIsDarkMode(false);
//     } else {
//       setIsDarkMode(JSON.parse(darkMode));
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   useEffect(() => {
//     document.body.classList.toggle('darkmode', isDarkMode);
//     localStorage.setItem('darkmode', JSON.stringify(isDarkMode));
//   }, [isDarkMode]);

//   return (
//     <div>
//       <div className={`btn ${isDarkMode ? 'darkmode' : ''}`} onClick={toggleDarkMode}>
//         <div className="btn__indicator">
//           <div className="btn__icon-container">
//             <i className={`btn__icon fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
//           </div>
//         </div>
//       </div>

//       <h1 className={isDarkMode ? 'text-white' : 'text-black'}>hello</h1>
//     </div>
//   );
// };

// export default DarkModeToggle;
