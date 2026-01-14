const Key = (props) => {
  const { color, id, keyOnKeyboard } = props

  return (
    <li className={`key key--${color}`} id={id}>
      <span>{id}</span>
      <span className="key__hint">{keyOnKeyboard}</span>
    </li>
  )
}

export default Key
