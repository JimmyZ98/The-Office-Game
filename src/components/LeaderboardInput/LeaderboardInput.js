import win from '../../assets/images/win.gif'
import lose from '../../assets/images/lose.gif'
import axios from 'axios';
import './LeaderboardInput.scss'
import { useHistory } from "react-router-dom"

function FinalScore({ score }) {
    const history = useHistory()
    function enterLeaderboard(e,) {
        e.preventDefault()
        axios.post('http://localhost:8080/game/leaderboard', {
            name: e.target.name.value,
            score: score
        })
        .then(res => {
            window.alert(`You're in the ${res.data} position of the leaderboard`)
            history.push('/leaderboard')
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
                <input className='final-score__input' id='name' name='name' placeholder='Michael Scott' />
                <button className='final-score__button'>Join leaderboard</button>
            </form>
        </div>
     );
}

export default FinalScore;