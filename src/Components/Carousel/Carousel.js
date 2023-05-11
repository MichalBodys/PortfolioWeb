import { useSelector } from 'react-redux'
import { useState } from 'react'
import './Carousel.scss'

const Carousel = ({ projectId }) => {


    const projects = useSelector(state => state.projects)
    const project = projects.filter(project => project.id === projectId )
    const [curr, setCurr] = useState(0)
    const prev = () => {
      setCurr((curr) => (curr === 0 ? 3 - 1 : curr -1))
    //   console.log(curr);
    }
    const next = () => {
      setCurr((curr) => (curr === 3 -1 ? 0 : curr + 1))
      // console.log(curr);
    }
    // console.log(project);

    return(
    <div className='carousel'>
        {project[0].photos.map(photo =>
        <div className='carousel-slides' key={photo.nmb} style={{ transform: `translateX(-${curr * 100}%)`}}>
          <div className='carousel-slide'>
            <img src={photo.src} alt="" />
            <p className='slide-description'>{photo.description}</p>
          </div>
        </div>
         )}
         <div className='carousel-buttons'>
            <button onClick={prev}><i className="fa-solid fa-angle-left"></i></button>
            <button onClick={next}><i className="fa-solid fa-angle-right"></i></button>
        </div>
        <div className='carousel-dots'>
          <div className={curr === 0 ? 'active' : ''}></div>
          <div className={curr === 1 ? 'active' : ''}></div>
          <div className={curr === 2 ? 'active' : ''}></div>
        </div>
    </div>
    )


}

export default Carousel