import './Square.css';
import classNames from 'classnames';

const Square = ({ onClick, value, turn, winner }) => {

    const handleClick = () => {
       (turn !== null && value === null) && onClick();
    }
    
    let squareClass = classNames({
        square: true,
        [`square--${value}`] : value !== null,
        winner: winner
    })

    return (
        <div 
        className={squareClass} 
        onClick={() => handleClick ()}
        >
            
        </div>
    )
}

export default Square;