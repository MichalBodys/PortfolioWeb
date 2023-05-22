import './Footer.scss';

const Footer = () => {
  const year = (new Date).getFullYear();

    return(
    <footer className='footer'>
        <hr/>
        <div className='container'>
          <div className='footer-data'>
              <p>
              <span className='copyright'>&copy;{year}</span> michał bodys
              </p>
               <ul className='social-list'>
                <li><a href="https://www.linkedin.com/in/michal-bodys/  "><i alt="got to my linkedin" className="fa-brands fa-linkedin socials" ></i></a></li>
                <li><a href="https://github.com/MichalBodys"><i alt="got to my github" className="fa-brands fa-github socials"></i></a></li>
                <li><a href='mailto: bodysmic@gmail.com'><i alt="send me a email" className="fa-solid fa-envelope socials"></i></a></li>
                <li><a  href='https://drive.google.com/file/d/1bLGWo52KzPmlLElqVZmppxwRQEyKSone/view?usp=sharing'><svg xmlns="http://www.w3.org/2000/svg" class="socials icon icon-tabler   icon-tabler-file-cv" width="24" height="24" viewBox="5 2 24 24" stroke-width="1" stroke="black" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                        <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                        <path d="M13 11l1.5 6l1.5 -6"></path>
                            </svg>
                  </a></li>
              </ul>
          </div>
        </div>
    </footer>
    )


}



export default Footer