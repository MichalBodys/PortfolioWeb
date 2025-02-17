// pages/Skills.tsx

import './Skills.scss';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const [count, setCount] = useState(0);
  const [btnMsg, setBtnMsg] = useState('Click Me!');

  const clickHandler = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 1) setBtnMsg('Again!');
      if (newCount === 3) setBtnMsg("That's all... for now");
      if (newCount === 4) return 1;
      return newCount;
    });
  };

  const skillData = [
    ['programming technologies that i already used'],
    ['HtMl', 'css', 'javascript', 'React', 'Vue', 'next.js'],
    ['Redux', 'pinia', 'Vite', 'sass', 'npm', 'yarn', 'nunjucks'],
    ['bootstrap', 'tailwind', 'RWd', 'AjAX', 'Git', 'php', 'mysql'],
    ['I learn something new every day'],
  ];

  return (
    <section id="skills" className="skills">
      <motion.div
        ref={ref}
        className="container"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        <button onClick={clickHandler}>{btnMsg}</button>
        <div className="skills-box">
          {skillData.map((skills, index) => (
            <div key={index} className="skill-box">
              {skills.map((skill, idx) => (
                <span key={idx} className={count === index ? 'show' : ''}>
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
