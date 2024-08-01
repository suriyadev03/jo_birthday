import React, { useEffect, useState } from 'react'
import Page31 from '../../src/assets/loveletter.gif';
import Page33 from '../../src/assets/loveletter2.gif';
import Page32 from '../../src/assets/JOTHIBA.mp4';
import Page34 from '../../src/assets/candle.webp';
import { MuiOtpInput } from 'mui-one-time-password-input'
import Page21 from '../../src/assets/cake.png';
import { useNavigate } from 'react-router-dom';
import Loader from './Loder/Loader';

const PageThree = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  const handleChange = (newValue) => {
    setOtp(newValue)
  }
  const viewPage = () => {
    if (otp === "0208") {
      navigate("/pageFour")
    } else {
      alert("wrong input")
      setOtp("")
    }
  }
  return (
    <>
      {isLoading ? (
        <div className="PageThree loader"><Loader /></div>
      ) : (
        <div className='PageThree'>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <img src={Page31} alt='loveletter' className='loveletter' />
            <img src={Page34} alt='loveletter' className='candle' />
            <img src={Page33} alt='loveletter' className='loveletter' />

          </div>
          <div style={{width:"100%",display:"flex",justifyContent:'center'}}>
          <video width="250" height="150" autoPlay muted>
      <source src={Page32} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
          </div>
          {/* <img src={Page32} alt='birthdayImgBanner' className='birthdayImgBanner' /> */}
          
          {/* <video width="320" height="240" autoplay>
            <source src={Page32} type="video/mp4"></source>
          </video> */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', marginTop: '20px' }}>
            <span style={{ color: "#ff637e", marginBottom: '15px', fontSize: "15px" }}>Enter Your Mobile Password</span>
            <MuiOtpInput value={otp} onChange={handleChange} sx={{ width: "260px" }} />
            <div className='fingerPrint viewPage'>
              <button onClick={viewPage}>
                <span>OPEN</span><img src={Page21} alt='cake' />
              </button>
              <button onClick={() => navigate("/pageFive")}>
                <span>SKIP</span><img src={Page21} alt='cake' />
              </button>
            </div>
          </div>
        </div>
      )}
    </>

  )
}

export default PageThree
