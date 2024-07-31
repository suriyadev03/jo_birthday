import React from 'react'
import Page61 from '../../src/assets/3b56330f710c3a978f27c9cc7e099180.gif';
import { useNavigate } from 'react-router-dom';
import Page21 from '../../src/assets/cake.png';


const PageSix = () => {
    const navigate = useNavigate()
    const endPage = () => {
        navigate("/")
        window.location.reload();
    }
    return (
        <div className='PageSix'>
            <div>
                <h3 className='header4'>என் காதலே !</h3>
                <div>
                    <span style={{ color: 'blue' }}>இப்படிக்கு,</span>
                    <span>உன் காதலுக்கு தினமும்</span>
                    <span>ஏக்கத்தில் தவிக்கும் <span style={{ color: "red" }}>சூரியா</span></span>
                </div>
                <span className='iloveyougif'>
                    <img src={Page61} alt='iloveyou' className='' />
                </span>
                <span className='fingerPrint openVideoBtn nextBtn'>
                    <button onClick={endPage}>
                        <span>THE END</span><img src={Page21} alt='cake' />
                    </button>
                </span>

            </div>
        </div>
    )
}

export default PageSix
