import {  useState } from 'react'
import { useInterval } from "react-use"
import './TextAnimation.scss'

const TextAnimation = () => {

    const workWellSentence = 'Work well'
    const connectPplSentence = "connect people"
    const lookGrtSentence = "look great"
    const [items , setItems ] = useState(connectPplSentence);
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(true)


    useInterval(
        ()=> {
            setItems(workWellSentence)
            setCount(count+1)
            if(count === 1){
                setCount(2)
                setItems(lookGrtSentence)
            }else if(count === 2){
                setCount(0)
                setItems(connectPplSentence)
            }
        },
        play ? 4500 : null
    )





    return(
        <div className='animated'>
            <span>{items}</span>
        </div>
    )
}

export default TextAnimation