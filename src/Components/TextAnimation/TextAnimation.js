import {  useState } from 'react'
import { useInterval } from "react-use"
import './TextAnimation.scss'

const TextAnimation = () => {

    const ideas = 'ideas'
    const work = "work"
    const creation = "creation"
    const vision = "vision"
    const passion = "passion"
    const life = "approach to life"
    const [items , setItems ] = useState(ideas);
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(true)


    useInterval(
        ()=> {
            setItems(work)
            setCount(count+1)
            if(count === 1){
                setCount(2)
                setItems(creation)
            }else if(count === 2){
                setCount(3)
                setItems(vision)
            }else if(count === 3){
                setCount(4)
                setItems(passion)
            }else if(count === 4){
                setCount(0)
                setItems(life)
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