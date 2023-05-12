import './Skills.scss'
import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'


const Skills = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
      if(isInView){
        mainControls.start('visible');
      }
    })


    const  [count, setCount] = useState(0)
    const [btnMsg, setBtnMsg] = useState('click Me !')

    const clickHandler = () => {
      setCount(count + 1)
      if(count === 0)   setBtnMsg('AGAin!')
      if(count === 3) setBtnMsg(` that's all... for now `)
      if(count === 4) setCount(1) ;

      console.log(count);
    }


        return(
            <section id='skills' className='skills'>
              <motion.div  ref={ref} className='container'
               variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
              }}
              initial="hidden"
              animate={mainControls}
              transition={{duration: 1}}>
                  <button onClick={clickHandler}>{btnMsg}</button>
                <div  className="skills-box">
                <div className='skill-box'>
                    <span className={(count === 0 ? 'show' : '')}>programing technologies that i already used</span>
                  </div>
                  <div className='skill-box'>
                    <span className={(count === 1 ? 'show' : '')}>html</span>
                    <span className={(count === 1 ? 'show' : '')}>css</span>
                    <span className={(count === 1 ? 'show' : '')}>sass</span>
                    <span className={(count === 1 ? 'show' : '')}>javascript</span>
                    <span className={(count === 1 ? 'show' : '')}>react</span>
                  </div>
                  <div className='skill-box'>
                    <span className={(count === 2 ? 'show' : '')}>redux</span>
                    <span className={(count === 2 ? 'show' : '')}>Git</span>
                    <span className={(count === 2 ? 'show' : '')}>npm</span>
                    {/* <span className={(count === 2 ? 'show' : '')}>Vue</span> */}
                    <span className={(count === 2 ? 'show' : '')}>yarn</span>
                  </div>
                  <div className='skill-box'>
                    <span className={(count === 3 ? 'show' : '')}>bootstrap</span>
                    <span className={(count === 3 ? 'show' : '')}>rwd</span>
                    <span className={(count === 3 ? 'show' : '')}>ajaX</span>
                  </div>
                  <div className='skill-box'>
                    <span className={(count === 4 ? 'show' : '')}>i learn something new every day</span>
                  </div>

                </div>
              </motion.div>
            </section>
        )
}
export default Skills