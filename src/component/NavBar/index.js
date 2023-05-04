import './index.css'

const NavBar = props => {
  const {timerStart, score} = props

  return (
    <div className="nav-bar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-img"
      />
      <div className="nav-bar-list-text">
        <li className="nav-bar-paragraph">
          <p>
            Score: <span className="nav-bar-paragraph-timer">{score}</span>
          </p>

          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
            className="nav-bar-timer"
          />

          <p className="nav-bar-paragraph-timer">{timerStart} sec</p>
        </li>
      </div>
    </div>
  )
}

export default NavBar
