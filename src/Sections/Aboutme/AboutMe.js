
import TextAnimation from '../../Components/TextAnimation/TextAnimation'
import './AboutMe.scss'


const AboutMe = () => {
    return(
        <section id='about' className='container about__me'>
          <div className='about__me-text' >
              <h2>i'm Michał,<br/> and i like to make things <br/> that</h2>
              <div className='animate-text'>
                <TextAnimation/>
              </div>
          </div>
          <div className='about_me-icons'>

            <a href="www.linkedin.com/in/michal-bodys"><i className="fa-brands fa-linkedin socials" ></i></a>
            <a href="https://github.com/MichalBodys"><i className="fa-brands fa-github socials"></i></a>
            <a href='mailto: bodysmic@gmail.com'><i className="fa-solid fa-envelope socials"></i></a>
          </div>
      </section>
    )
}


export default AboutMe