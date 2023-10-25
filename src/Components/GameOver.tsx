import GameState from "./GameState"
import React, { useState } from 'react';
import Modal from "./Modal";
import GameOverIMG from "../Assets/Images/gameOver.png"

type Props = {
    gameState: any;
}

function GameOver({ gameState }: Props) {

    // Modal
    const [isOpen, setIsOpen] = useState(true);

    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.firstUserWins:
            return (
                <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                    <div className="game-over"><img src={GameOverIMG} /><span className="tile-gameover">◯</span> WINS</div>
                </Modal>
            )
        case GameState.secondeUserWins:
            return (
                <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                    <div className="game-over"><img src={GameOverIMG} /><span className="tile-gameover">△</span> WINS</div>
                </Modal>
            )
        case GameState.draw:
            return (
                <Modal open={isOpen} onClose={() => setIsOpen(false)} >
                    <div className="game-over"><img src={GameOverIMG} />Draw</div>
                </Modal>
            )
        default:
            return <></>;
    }
}

export default GameOver