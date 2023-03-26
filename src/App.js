import NavBar from './Components/NavBar/NavBar';
import './Styles/App.scss'
import './Styles/global.scss'


const App = () => {
  return (
    <div className="App">
      <header className='container'>
       <NavBar/>
        <div className='title-box'>
        <h1 className='web-title'>Hello.<br/> this is my portfolio website,<br/>
        i'm front end developer</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
