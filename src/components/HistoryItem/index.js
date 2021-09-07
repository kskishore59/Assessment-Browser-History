import './index.css'

const HistoryItem = props => {
  const {itemDetails, onDeleteListItem} = props
  const {id, title, domainUrl, logoUrl, timeAccessed} = itemDetails

  const onDeleteItem = () => {
    onDeleteListItem(id)
  }

  return (
    <li className="main-container">
      <p className="time">{timeAccessed}</p>
      <div className="text-container">
        <img src={logoUrl} alt="domain logo" className="logo-img" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        testid="delete"
        onClick={onDeleteItem}
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
