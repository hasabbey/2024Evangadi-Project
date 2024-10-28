// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { UserContextProvider } from './Components/ContextAPI/Context';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <UserContextProvider>

   
//   <React.StrictMode>
  
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
   
//   </React.StrictMode>


//   </UserContextProvider>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Components/ContextAPI/Context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </UserProvider>
    </React.StrictMode>
  
);
