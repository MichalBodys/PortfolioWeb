import "./Cursor.scss"
import { useState } from 'react'


const Cursor = () => {

    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()
    const [cursorHover, setCursorHover] =useState(false)


    window.addEventListener('mousemove', (e)=>{
      setCursorX(e.clientX)
      setCursorY(e.clientY)
      // console.log(cursorX);
      // console.log(cursorY);
      e.target.className ===  'nav__link' || e.target.className === 'author' ? setCursorHover(true) : setCursorHover(false)

      // console.log(cursorHover);
    })
    return(
        <div className="cursor" style={{
          left:cursorX + 'px', top: cursorY + 'px',
          ...( cursorHover ? {transform: 'scale(3)', zIndex: 2} : {} ),
        }}></div>
    )

}

export default Cursor