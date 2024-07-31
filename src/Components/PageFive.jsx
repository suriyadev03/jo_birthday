import React from 'react'
import Page51 from '../../src/assets/oldnewbirthday.png';
import Page21 from '../../src/assets/cake.png';
import { useNavigate } from 'react-router-dom';

const PageFive = () => {
    const navigate = useNavigate()

    const endPage = () => {
        navigate("/pageSix")
    }
  return (
    <div className='PageFive'>
      <div className='oldnewbirthday'>
        <img src={Page51} alt='oldnewbirthday' />
      </div>
      <div className='dialoge' style={{padding:"10px",textAlign:"center"}}>
        <span>அன்றில் இருந்து இன்று வரை</span>
        <span> உன் முகமும் மாறவில்லை,</span>
        <span>உன் குணமும் மாறவில்லை</span>
      </div>
      <div className='BIRTHDAYwISH'>
        <span>HAPPY</span>
        <span>BIRTHDAY</span>
        <span>TO</span>
        <span>MY DEAR PONDATTIIII</span>
      </div>
      <div className='fingerPrint openVideoBtn nextBtn'>
          <button onClick={endPage}>
            <span>END PAGE</span><img src={Page21} alt='cake' />
          </button>
        </div>
    </div>
  )
}

export default PageFive
