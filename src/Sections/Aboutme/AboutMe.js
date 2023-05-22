
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
            <a href='https://drive.google.com/file/d/1vRdFkgDJjWdkQ73HwHSr6BV4INqB9vgd/view?usp=sharing'>
              <svg xmlns="http://www.w3.org/2000/svg" class="socials icon icon-tabler   icon-tabler-file-cv" width="45" height="45" viewBox="5 -1 24 24" stroke-width="1" stroke="#092521" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                        <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                        <path d="M13 11l1.5 6l1.5 -6"></path>
              </svg>
            </a>


          </motion.div>
    </section>
    )
}


export default AboutMe