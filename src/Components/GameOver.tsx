import React, { useState } from 'react';
import Modal from './Modal';
import GameOverIMG from '../Assets/Images/gameOver.png';
import Animation from '../Assets/animation/confetti.gif';
import GameState from './GameState';


const GameOver = ({ gameState }: any) => {
    // Modal
    const [isOpen, setIsOpen] = useState(true);
    

    const getGameOverContent = (symbol: string, message: string) => (
        <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
            <div className="game-over">
                <img src={GameOverIMG} />
                <span className="tile-gameover">{symbol}</span>
                <p>{message}</p>
                {symbol !== 'Draw' && <img className="animation" src={Animation} />}
            </div>
        </Modal>
    );

    switch (gameState) {
        case GameState.inProgress:
            return null;
        case GameState.firstUserWins:
            return getGameOverContent('◯', 'WINS');
        case GameState.secondeUserWins:
            return getGameOverContent('△', 'WINS');
        case GameState.draw:
            return getGameOverContent('', 'Draw');
        default:
            return null;
    }
    
};

export default GameOver;
