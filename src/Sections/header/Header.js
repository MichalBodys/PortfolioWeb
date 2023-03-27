
import NavBar from '../../Components/NavBar/NavBar'
import './Header.scss'

const Header = () => {
    return(
        <header className='container'>
            <NavBar/>
             <div className='title-box'>
             <h1 className='web-title'>Hello.<br/> this is my portfolio website,<br/>
             i'm front end developer</h1>
             </div>
       </header>
    )
}

export default Header