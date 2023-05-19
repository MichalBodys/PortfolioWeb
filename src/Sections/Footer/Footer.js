import './Footer.scss';

const Footer = () => {
  const year = (new Date).getFullYear();

    return(
    <footer className='footer'>
        <hr/>
        <div className='container'>
          <div className='footer-data'>
              <p>
              <span className='copyright'>&copy;{year}</span> michał bodys poland
              </p>
               <ul className='social-list'>
                <li><a  href='https://drive.google.com/file/d/1VVTQDh8JIHx4Tp3k8JnBfjlLIJnPzR5I/view?usp=share_link'><i  alt="got to my resume" className="fa-solid fa-file socials"></i></a></li>
                <li><a href="https://www.linkedin.com/in/michal-bodys/  "><i alt="got to my linkedin" className="fa-brands fa-linkedin socials" ></i></a></li>
                <li><a href="https://github.com/MichalBodys"><i alt="got to my github" className="fa-brands fa-github socials"></i></a></li>
                <li><a href='mailto: bodysmic@gmail.com'><i alt="send me a email" className="fa-solid fa-envelope socials"></i></a></li>
              </ul>
          </div>
        </div>
    </footer>
    )


}



export default Footer