import React from 'react';

import './GameCars.css'

const GameCard = ({image}) => {
    return (
        <div
            className="game-card"
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
        </div>
    );
};

export default GameCard;