const Key = (props) => {
  const { color, id, keyOnKeyboard, playSound } = props

  return (
    <li>
      <button
        className={`key key--${color}`}
        onMouseDown={() => playSound(id)}
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === keyOnKeyboard) {
            playSound(id)
          }
        }}
      >
        <span>{id}</span>
        <span className="key__hint">{keyOnKeyboard}</span>
      </button>
    </li>
  )
}

export default Key
