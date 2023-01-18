import './ScoreBoard.css';

const ScoreBoard = ({ score }) => (
    <div className="score-board">
        <div>{score.X}</div>
        <div>{score.O}</div>
    </div>
)

export default ScoreBoard;