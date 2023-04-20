import "./Cursor.scss"
import { useState } from 'react'


const Cursor = () => {

    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()


    window.addEventListener('mousemove', (e)=>{
      setCursorX(e.clientX)
      setCursorY(e.clientY)
      // console.log(cursorX);
      // console.log(cursorY);
    })
    return(
        <div className="cursor"style={{left: cursorX + 'px', top: cursorY+ 'px'}}></div>
    )



}

export default Cursor