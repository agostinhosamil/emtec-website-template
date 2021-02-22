import { Fragment, useState, useEffect } from "react"

export const HeroSlider = ({ children }) => {
  const [ currentSlide, setCurrentSlide] = useState(0)

  if ( !(children instanceof Array) ) {
    return (
      <Fragment>
        { children }
      </Fragment>
    )
  }

  const HeroSlideLoopEffect = () => {
    
    setInterval(() => {
      setCurrentSlide( currentSlide + 1 >= children.length ? 0 : currentSlide + 1 )
    }, 1000)
  }
  

  //useEffect(HeroSlideLoopEffect, [])

  return (
    <Fragment>
      { children[ currentSlide ] }


      <button onClick={HeroSlideLoopEffect}>Start</button>
    </Fragment>
  )
}
