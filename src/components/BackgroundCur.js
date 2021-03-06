import React from 'react';
import $ from 'jquery';
import {TweenMax, Power4} from 'gsap'


const BackgroundCur = () => {
    
    $(window).mousemove(function(e) { 
        TweenMax.to($('.cursorBack'), 0.4, {
          left: e.pageX,
          top: e.pageY,
          ease: Power4.easOut
        });
    })

    $( window ).resize(function() {
        TweenMax.to($('.cursorBack'), 0.4, {
            left: 0,
            top: 0,
        });
    })

    return (
        <div id="cursor">
            <div className='cursorBack'></div>
        </div>
        
    );
};

export default BackgroundCur;