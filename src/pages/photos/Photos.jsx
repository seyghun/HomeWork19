import React from 'react';
import './Photos.css';
import capy1 from '../photos/images/capy1.jpg';
import capy2 from '../photos/images/capy2.jpg';
import capy3 from '../photos/images/capy3.jpg';
import capy4 from '../photos/images/capy4.jpg';
import capy5 from '../photos/images/capy5.jpg';
import capy6 from '../photos/images/capy6.jpg';
import capy7 from '../photos/images/capy7.jpg';
import capy8 from '../photos/images/capy8.jpg';
import capy9 from '../photos/images/capy9.jpg';


const Photos = () => {
    return (
        <div className='capy-gallery'>
            <img className='photo' src={capy1} alt="capy1"></img>
            <img className='photo' src={capy2} alt="capy2"></img>
            <img className='photo' src={capy3} alt="capy3" ></img>
            <img className='photo' src={capy4} alt="capy4" ></img>
            <img className='photo' src={capy5} alt="capy5" ></img>
            <img className='photo' src={capy6} alt="capy6" ></img>
            <img className='photo' src={capy7} alt="capy7" ></img>
            <img className='photo' src={capy8} alt="capy8" ></img>
            <img className='photo' src={capy9} alt="capy9" ></img>
        </div>
    );
};

export default Photos;