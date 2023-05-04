import './index.css'

const TabList = props => {
  const {tabsDetails, getCategoryWise} = props
  const {tabId, displayText} = tabsDetails

  const onClickBtn = () => {
    getCategoryWise(tabId)
  }

  return (
    <li className="tab-list">
      <button type="button" className="btn" onClick={onClickBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabList
