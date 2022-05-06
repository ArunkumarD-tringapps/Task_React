import React from'react';
import Heading from './Components/Heading';
import Sidenav from './Components/Sidenav';
import Contents from './Components/Contents';
import Footing from './Components/Footing'
import './App.css';

function App() {
  return (
    <div className='container'>
           <Heading />
           <div id='maincontainer'>
           <Sidenav />
           <Contents/>
           </div>
           <Footing />
          
      </div>
     
  );
}

export default App;
