import React, { useState } from 'react'
import Page31 from '../../src/assets/loveletter.gif';
import Page33 from '../../src/assets/loveletter2.gif';
import Page32 from '../../src/assets/birthdayImgBanner.gif';
import { MuiOtpInput } from 'mui-one-time-password-input'
import Page21 from '../../src/assets/cake.png';
import { useNavigate } from 'react-router-dom';

const PageThree = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("");
  const handleChange = (newValue) => {
    setOtp(newValue)
  }
  const viewPage = () => {
    if(otp === "0208"){
      navigate("/pageFour")
    }else{
      alert("wrong input")
      setOtp("")
    }
  }
  return (
    
    <div className='PageThree'>
      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
      <img src={Page31} alt='loveletter' className='loveletter' />
      <img src={Page33} alt='loveletter' className='loveletter' />

      </div>
      <img src={Page32} alt='birthdayImgBanner' className='birthdayImgBanner' />
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'100%',marginTop:'20px'}}>
      <span style={{color:"#ff637e",marginBottom:'15px',fontSize:"15px"}}>Enter Your Mobile Password</span>
      <MuiOtpInput value={otp} onChange={handleChange} sx={{ width: "260px"}} />
      <div className='fingerPrint viewPage'>
          <button onClick={viewPage}>
            <span>SUBMIT</span><img src={Page21} alt='cake' />
          </button>
          <button onClick={()=>navigate("/pageFive")}>
            <span>SKIP</span><img src={Page21} alt='cake' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageThree
