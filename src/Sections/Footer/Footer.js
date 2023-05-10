import './Footer.scss';

const Footer = () => {

    return(
    <footer className='footer'>
        <hr/>
        <div className='container'>
          <div className='footer-data'>
              <p>
              <span className='copyright'>&copy;2023</span> michał bodys poland
              </p>
               <ul className='social-list'>
                <li><a href="www.linkedin.com/in/michal-bodys"><i className="fa-brands fa-linkedin socials" ></i></a></li>
                <li><a href="https://github.com/MichalBodys"><i className="fa-brands fa-github socials"></i></a></li>
                <li><a href='mailto: bodysmic@gmail.com'><i className="fa-solid fa-envelope socials"></i></a></li>
              </ul>
          </div>
        </div>
    </footer>
    )


}



export default Footer