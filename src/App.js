import React, { useState } from 'react';
import MenuBar from './component/menuBar/MenuBar';
import MainSection from './component/main/MainSection';

const App = () => {

    const [showMenu, setShowMenu] = useState(false);


    return (
        <div className='body'>

            {/* //---menu bar section start ------------------------// */}
            <div id='menuBar' className='top_menu bg-light w-100 '>
                <MenuBar/>
            </div>
            {/* //---menu bar section end ------------------------// */}


            {/* //---main section start ------------------------// */}
            <div id='mainSection' className='main'>
                <MainSection/>
            </div>
            {/* //---main section end ------------------------// */}

        </div>
    )
}


export default App;
