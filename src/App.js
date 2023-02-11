import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';
import { Mcontext } from './contexts/Mcontext';
import Sidebar from './Sidebar';

const App = ()=>{

    const [showMenu , setShowMenu] = useState(false);


    return (
        <div>
            <BrowserRouter>
                <Mcontext.Provider value={{showMenu, setShowMenu}}>
                    <Sidebar/>
                    <Content/>            
                </Mcontext.Provider>
            </BrowserRouter>
                
        </div>
    ) 
}


export default App;
