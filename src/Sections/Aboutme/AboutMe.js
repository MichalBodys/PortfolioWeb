
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
              <h2>i'm Michał,<br/> and i like to make things <br/> that</h2>
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
            <a href="www.linkedin.com/in/michal-bodys"><i className="fa-brands fa-linkedin socials" ></i></a>
            <a href="https://github.com/MichalBodys"><i className="fa-brands fa-github socials"></i></a>
            <a href='mailto: bodysmic@gmail.com'><i className="fa-solid fa-envelope socials"></i></a>
          </motion.div>
    </section>
    )
}


export default AboutMe