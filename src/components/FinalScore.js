import win from '../assets/images/win.gif'
import lose from '../assets/images/lose.gif'
import axios from 'axios';

function FinalScore({ score }) {
    
    function enterLeaderboard(e) {
        axios.post('http://localhost:8080/game/leaderboard', {
            name: e.target.name.value,
            score: score
        })
        .then(res => {
            console.alert(`You're in the ${res.data} position of the leaderboard`)
            this.props.history.push('/')
        })
        .catch(err => {
            console.error(err)
        })
    }
    
    return ( 
        <div className='final-score'>
            <img className='final-score__image' src={score>5 ? win : lose} alt="gif with winning or losing mood" />
            <p className='final-score__score'>FINAL SCORE: {score}</p>
            <form className='final-score__form' onSubmit={enterLeaderboard}>
                <label className='final-score__label' htmlFor='name' >Enter your name to the leaderboard</label>
                <input className='final-score__input' id='name' name='name' placeholder='Input name' />
                <button className='final-score__button'>Join leaderboard</button>
            </form>
        </div>
     );
}

export default FinalScore;