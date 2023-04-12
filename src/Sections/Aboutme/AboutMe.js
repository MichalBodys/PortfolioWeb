
import TextAnimation from '../../Components/TextAnimation/TextAnimation'
import './AboutMe.scss'


const AboutMe = () => {
    return(
        <div className='container about__me'>
          <div className='about__me-text' >
              <h2>I'm Michał,<br/> and i like to make things <br/> that</h2>
              <p className='animate-text'>
                <TextAnimation/>
              </p>
          </div>
          <div className='about_me-icons'>

            <a href="www.linkedin.com/in/michal-bodys"><i class="fa-brands fa-linkedin" ></i></a>
            <a href="https://github.com/MichalBodys"><i class="fa-brands fa-github"></i></a>
            <a href='mailto: bodysmic@gmail.com'><i class="fa-solid fa-envelope"></i></a>
          </div>
      </div>
    )
}


export default AboutMe