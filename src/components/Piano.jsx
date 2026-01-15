import Key from './Key'

const Piano = () => {
  const keys = [
    'C5',
    'Db5',
    'D5',
    'Eb5',
    'E5',
    'F5',
    'Gb5',
    'G5',
    'Ab5',
    'A5',
    'Bb5',
    'B5',
    'C6',
    'Db6',
    'D6',
    'Eb6',
    'E6',
    'F6',
  ]

  const keysOnKeyboard = [
    'a',
    'w',
    's',
    'e',
    'd',
    'f',
    't',
    'g',
    'y',
    'h',
    'u',
    'j',
    'k',
    'o',
    'l',
    'p',
    ';',
    "'",
  ]

  const playSound = (note) => {
    new Audio(`/sounds/${note}.mp3`).play()
  }

  return (
    <div className="piano">
      <ul className="piano__keys">
        {keys.map((key, i) => {
          return (
            <Key
              color={key.length === 3 ? 'black' : 'white'}
              id={key}
              keyOnKeyboard={keysOnKeyboard[i]}
              key={key}
              playSound={playSound}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Piano
