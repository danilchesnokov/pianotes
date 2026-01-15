import { useRef } from 'react'
import Key from './Key'

const Piano = () => {
  const keys = [
    { note: 'C5', keyboard: 'a' },
    { note: 'Db5', keyboard: 'w' },
    { note: 'D5', keyboard: 's' },
    { note: 'Eb5', keyboard: 'e' },
    { note: 'E5', keyboard: 'd' },
    { note: 'F5', keyboard: 'f' },
    { note: 'Gb5', keyboard: 't' },
    { note: 'G5', keyboard: 'g' },
    { note: 'Ab5', keyboard: 'y' },
    { note: 'A5', keyboard: 'h' },
    { note: 'B5', keyboard: 'j' },
    { note: 'C6', keyboard: 'k' },
    { note: 'Db6', keyboard: 'o' },
    { note: 'D6', keyboard: 'l' },
    { note: 'Eb6', keyboard: 'p' },
    { note: 'E6', keyboard: ';' },
    { note: 'F6', keyboard: "'" },
  ]

  const audioCache = useRef({})

  const playSound = (note) => {
    if (!audioCache.current[note]) {
      audioCache.current[note] = new Audio(`/sounds/${note}.mp3`)
    }

    audioCache.current[note].currentTime = 0
    audioCache.current[note].play()
  }

  return (
    <div className="piano">
      <ul className="piano__keys">
        {keys.map(({ note, keyboard }) => {
          const isBlackKey = note.includes('b')
          return (
            <Key
              color={isBlackKey ? 'black' : 'white'}
              id={note}
              keyOnKeyboard={keyboard}
              key={note}
              playSound={playSound}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Piano
