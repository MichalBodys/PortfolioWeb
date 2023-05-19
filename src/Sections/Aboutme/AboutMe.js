
import { useEffect, useRef } from 'react'
import TextAnimation from '../../Components/TextAnimation/TextAnimation'
import './AboutMe.scss'
import { motion, useInView, useAnimation } from 'framer-motion'


const AboutMe = () => {

  const ref = useRef(null);
  // const refr = useRef(null);
  const isInView = useInView(ref, { once: true })

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
   if(isInView){
    leftControls.start('visible');
    rightControls.start('visible')
   }
  }, )

    return(
        <section ref={ref} id='about' className='container about__me'>
          <motion.div
          variants={{
              hidden: { x: -1000},
              visible:{ x: 0}
            }}
            initial="hidden"
            animate={leftControls}
            transition={{duration: 1}}
             className='about__me-text'  >
              <h2>my name is michał,<br/>and i'm here to share<br/> my</h2>
              <div className='animate-text'>
                <TextAnimation/>
              </div>
          </motion.div>

          <motion.div
          variants={{
            hidden: { x: 1000},
            visible:{ x: 0}
          }}
          initial="hidden"
          animate={rightControls}
          transition={{duration: 1}}
          className='about_me-icons'>
            <a href="https://www.linkedin.com/in/michal-bodys/"><i alt="got to my linkedin" className="fa-brands fa-linkedin socials" ></i></a>
            <a href="https://github.com/MichalBodys"><i alt="got to my github" className="fa-brands fa-github socials"></i></a>
            <a href='mailto: bodysmic@gmail.com'><i alt="send me a email"  className="fa-solid fa-envelope socials"></i></a>
            <a href='https://drive.google.com/file/d/1VVTQDh8JIHx4Tp3k8JnBfjlLIJnPzR5I/view?usp=share_link'><i alt="go to my resume" className="fa-solid fa-file socials"></i></a>


          </motion.div>
    </section>
    )
}


export default AboutMe