import React from 'react';
import BackgroundCur from '../components/BackgroundCur';
import FaButton from '../components/FaButton';
import Name from '../components/Name';


const Home = () => {
    return (
        <div className='root'>

            <div className="container">
                <Name />
                <div className="socials">
                    <FaButton url='github' id='FaButton' faId='github' />
                    <FaButton url='youtube' id='FaButton' faId='youtube' />
                    <FaButton url='discord' id='FaButton' faId='discord' />
                </div>
            </div>
            <BackgroundCur />
        </div>
    );
};

export default Home;

