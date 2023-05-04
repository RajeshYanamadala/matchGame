import './index.css'

const GameOver = props => {
  const {isActivate, score} = props

  const onClickButton = () => {
    isActivate()
  }

  return (
    <div className="game-over-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="score-heading">YOUR SCORE</p>
      <p className="score">{score}</p>
      <button type="button" className="play-again-btn" onClick={onClickButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOver
