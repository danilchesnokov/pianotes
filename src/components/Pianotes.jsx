import { useState } from 'react'
import Piano from './Piano'

const Pianotes = () => {
  const [isPianoVisible, setIsPianoVisible] = useState(false)

  const onShowPianoButtonClickHandler = () => {
    setIsPianoVisible((isPianoVisible) => !isPianoVisible)
  }

  return (
    <div className="pianotes">
      <h1>Pianotes</h1>
      <button className="button" onClick={onShowPianoButtonClickHandler}>
        {isPianoVisible ? 'Hide piano' : 'Show piano'}
      </button>
      {isPianoVisible && <Piano />}
    </div>
  )
}

export default Pianotes
