import React from 'react';
import BackgroundCur from '../components/BackgroundCur';
import FaButton from '../components/FaButton';
import Name from '../components/Name';
import PlayButtonSnake from '../components/PlayButtonSnake';


const Home = () => {
    return (
        <div className="body">
            <div className='root'>
                <div className="container">
                    <div className="logo-name">
                        <Name />
                    </div>
                    <div className="socials">
                        <FaButton url='github' id='FaButton' faId='github' />
                        <FaButton url='youtube' id='FaButton' faId='youtube' />
                        <FaButton url='discord' id='FaButton' faId='discord' />
                    </div>
                    <div className="games">
                        <div className="snakeDiv">
                            <PlayButtonSnake />    
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundCur />
        </div>

    );
};

export default Home;

