import './Turn.css';

const Turn = ({ turn }) => {
    return (
        <div className={(turn == 'X'? 'turn-x' : 'turn-o') + ' ' + 'turn'}>
           Es el turno de: {turn}
        </div>
    )
}

export default Turn;