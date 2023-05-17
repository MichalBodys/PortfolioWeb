

import NavBar from '../../Components/NavBar/NavBar'
import './Header.scss'



const Header = (params) => {


    return(
        <header id='header' >
            <NavBar/>
            <div className='container'>
                <div className='title-box'>
                <h1 className='web-title'>hello.<br/> this is my portfolio website,<br/>
                i'm front end developer</h1>
                </div>
            </div>

       </header>

    )
}

export default Header