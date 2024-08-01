import React, { useEffect, useState } from 'react'
import Page11 from '../../src/assets/png-transparent-valentines-day-gift-heart-christmas-love-gift-love-miscellaneous-floating-removebg-preview.png';
import Page12 from '../../src/assets/image (2).png';
import Page13 from '../../src/assets/cake.png';
import Page14 from '../../src/assets/happybirthdaygif3.gif';
import { useNavigate } from 'react-router-dom';
import Loader from './Loder/Loader';

const PageOne = ({setAudioPlay}) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);
    const openPageTwo = () => {
        navigate("pageTwo")
        setAudioPlay(true)
        // audio.play();

    }
    return (
        <>
            {isLoading ? (
                <div className="pageOne loader"><Loader /></div>
            ) : (
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
            )}
        </>

    )
}

export default PageOne
