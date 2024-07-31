import React, { useState } from 'react'
import Page11 from '../../src/assets/png-transparent-valentines-day-gift-heart-christmas-love-gift-love-miscellaneous-floating-removebg-preview.png';
import Page12 from '../../src/assets/image (2).png';
import Page13 from '../../src/assets/cake.png';
import Page14 from '../../src/assets/happybirthdaygif3.gif';
import { useNavigate } from 'react-router-dom';
import audioFile from '../../src/assets/audio.mp3';

const PageOne = () => {
    const navigate = useNavigate()
    const [audio] = useState(new Audio(audioFile));
    const openPageTwo = () => {
        audio.pause();
        navigate("pageTwo")
        audio.play();

    }
    return (
        <div className='pageOne'>
            <img src={Page11} alt='giftHeart' className='giftHeart' />
            <div className='joImg1'>
                <img src={Page12} alt='joImg1' className='' />
            </div>
            <div className='fingerPrint'>
                <button onClick={openPageTwo}>
                    <span>OPEN</span><img src={Page13} alt='cake' />
                </button>
            </div>
            <div className='happybirthday'>
                <img src={Page14} alt='happybirthday' className='' />
            </div>

        </div>
    )
}

export default PageOne
