import React from 'react';
import { useNavigate } from 'react-router-dom'      

const PlayButtonSnake = () => {

    const navigate = useNavigate()

    return (
        <div className='playsnake' onClick={() => navigate("snake")}>
            Snake
        </div>
    );
};

export default PlayButtonSnake;