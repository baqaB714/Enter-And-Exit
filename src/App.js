import MenuBar from './pages/menuBar/MenuBar';
import MainSection from './pages/mainSection/MainSection';

const App = () => {



    return (
        <div className='body'>

            <div id='menuBar' className='top_menu bg-light w-100 '>
                <MenuBar />
            </div>


            <div id='mainSection' className='main'>
                <MainSection />
            </div>

        </div>
    )
}


export default App;
