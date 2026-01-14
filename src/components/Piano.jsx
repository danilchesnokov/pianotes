import Key from './Key'

const Piano = () => {
  const keys = [
    'C5',
    'C#5',
    'D5',
    'D#5',
    'E5',
    'F5',
    'F#5',
    'G5',
    'G#5',
    'A5',
    'A#5',
    'B5',
    'C6',
    'C#6',
    'D6',
    'D#6',
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
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Piano
