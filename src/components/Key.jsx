const Key = (props) => {
  const { color, id, keyOnKeyboard, playSound } = props

  return (
    <li>
      <button
        className={`key key--${color}`}
        id={id}
        onMouseDown={playSound}
        tabIndex="0"
      >
        <span>{id}</span>
        <span className="key__hint">{keyOnKeyboard}</span>
      </button>
    </li>
  )
}

export default Key
