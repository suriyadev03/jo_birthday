import React, { useState } from 'react'
import Page21 from '../../src/assets/cake.png';
import Page22 from '../../src/assets/happy-birthday.gif';
import { useNavigate } from 'react-router-dom';

const PageTwo = () => {
    const navigate = useNavigate()
    const [popscreen,setPopScreen] = useState(true)

    const closePop = () => {
        setPopScreen(false)
    }
    const openVideo = () => {
        navigate("/pageThree")
    }
  return (
    <div className='pageTwo'>
      {popscreen ? 
      <div className='popScreen'>
        <div>
            <div>
            <h3>HAPPY BIRTHDAT</h3>
            <h3>PONDATTI🫀</h3>
            </div>
        <p><span style={{color:"#F70A8D",fontWeight:'bold'}}>BABE</span>, Thank you for coming into my life.</p> <p>Thank you for making me smile like crazy.</p> <p>Thank you for making me happy.</p>
        <div className='fingerPrint closePopButton'>
                <button onClick={closePop}>
                    <span>OPEN</span><img src={Page21} alt='cake' />
                </button>
            </div>
        </div>
      </div>
      :<div className='pageTwo2'>
        <img src={Page22} className='happy-birthday-gif' alt='happy-birthday-gif'/>
        <h4>
            HAPPY BIRTHDAY<br/>
            TO THE LOVE OF<br/>
            MY LIFE 💙
        </h4>
        <h5>
            YOU ARE<br/> 
            MY<br/>
            TODAY<br/> AND<br/>
            ALL OF<br/> MY<br/>
            TOMORROW
        </h5>
        <div className='fingerPrint openVideoBtn'>
                <button onClick={openVideo}>
                    <span>OPEN VIDEO</span><img src={Page21} alt='cake' />
                </button>
            </div>
      </div>}
    </div>
  )
}

export default PageTwo
