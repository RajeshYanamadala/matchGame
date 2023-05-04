import {Component} from 'react'
import './index.css'
import TabList from '../TabList'
import NavBar from '../NavBar'
import Thumbnail from '../Thumbnail'
import GameOver from '../GameOver'

class MatchingGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryImg: props.imagesList[0].imageUrl,
      activeTabId: props.tabsList[0].tabId,
      count: 0,
      timerStart: 60,
      showTheCard: false,
      score: 0,
    }
  }

  componentDidMount() {
    this.renderTimer()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  incrementTimer = () => {
    const {timerStart} = this.state
    if (timerStart > 0) {
      this.setState(prevState => ({
        timerStart: prevState.timerStart - 1,
      }))
    } else {
      clearInterval(this.interval)
      this.setState({showTheCard: true})
    }
  }

  renderTimer = () => {
    this.interval = setInterval(this.incrementTimer, 1000)
  }

  renderZeroRandom = () => {
    const {count} = this.state
    const random = Math.floor(Math.random() * count)
    return random
  }

  getShuffledCategoryImg = imageUrl => {
    const {count, categoryImg} = this.state
    const {imagesList} = this.props

    if (categoryImg === imageUrl) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        categoryImg: imagesList[count].imageUrl,
        score: prevState.score + 1,
      }))
    } else {
      this.setState({showTheCard: true})
    }
  }

  getCategoryWise = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilterDetails = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props
    const filterCategoryList = imagesList.filter(
      eachCategoryItem => eachCategoryItem.category === activeTabId,
    )
    return filterCategoryList
  }

  isActivate = () => {
    this.setState({showTheCard: false, timerStart: 60})
    clearInterval(this.interval)
  }

  renderMatchGame = () => {
    const {tabsList} = this.props
    const {categoryImg} = this.state
    const filterCategoryList = this.getFilterDetails()

    return (
      <>
        <img src={categoryImg} alt="match" className="category-img" />
        <ul className="tabs-items">
          {tabsList.map(eachTab => (
            <TabList
              key={eachTab.tabId}
              tabsDetails={eachTab}
              getCategoryWise={this.getCategoryWise}
            />
          ))}
        </ul>
        <ul className="thumbnail-list-items">
          {filterCategoryList.map(eachImage => (
            <Thumbnail
              key={eachImage.id}
              thumbnailDetails={eachImage}
              getShuffledCategoryImg={this.getShuffledCategoryImg}
            />
          ))}
        </ul>
      </>
    )
  }

  renderGameOver = () => {
    const {score} = this.state

    return (
      <div>
        <GameOver isActivate={this.isActivate} score={score} />
      </div>
    )
  }

  render() {
    const {timerStart, score, showTheCard} = this.state
    const random = this.renderZeroRandom()
    console.log(random)

    return (
      <div>
        <NavBar timerStart={timerStart} score={score} />

        <div className="app-container">
          <div className="match-game-container">
            <div className="category-image-card">
              {showTheCard ? this.renderGameOver() : this.renderMatchGame()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchingGame
