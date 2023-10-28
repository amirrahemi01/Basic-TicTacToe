import React, { useState } from 'react';
import Modal from './Modal';
import GameOverIMG from '../Assets/Images/gameOver.png';
import Animation from '../Assets/animation/confetti.gif';
import GameState from './GameState';

export default function GameOver({ gameState }: any) {
    // Modal
    const [isOpen, setIsOpen] = useState(true);

    const getGameOverContent = (symbol: string, message: string) => (
        <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
            <div className="game-over">
                <img src={GameOverIMG} />
                <span className="tile-gameover">{symbol}</span>
                <p>{message}</p>
                {symbol !== 'Draw' && <img className="animation" src={Animation} alt="Confetti Animation" />}
            </div>
        </Modal>
    );

    function getGameResult(symbol: string, message: string) {
        if (gameState === GameState.inProgress) {
            return null;
        } else {
            return getGameOverContent(symbol, message);
        }
    };

    return getGameResult(
        gameState === GameState.firstUserWins ? '◯' : gameState === GameState.secondeUserWins ? '△' : '',
        gameState === GameState.draw ? 'Draw' : 'WINS'
    );
};

