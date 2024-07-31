import React, { useEffect, useState } from 'react'
import Page21 from '../../src/assets/cake.png';
import { useNavigate } from 'react-router-dom';
import Loader from './Loder/Loader';

const PageFour = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  const nextPage = () => {
    navigate("/pageFive")
  }

  return (
    <>
      {isLoading ? (
        <div className="PageFour loader"><Loader /></div>
      ) : (
        <div className='PageFour'>
          <div>
            <div>
              <h3 className='header'>என்னவளே !</h3>
              <span className="span1">
                நான் உன் அருகில் இல்லாமலிருக்கிறேனோ இல்லையோ, ஆனாலும் உனக்கு ஒருபோதும் கஷ்டம் வராமல் பார்த்துக் கொள்வேன். <br />உன்னை எனக்கு மிகவும் பிடிக்கும், ஜோதிபா.
              </span><hr />
              <span className="span2">
                இன்னும் இரண்டு ஆண்டுகள் முழுவதுமாக இல்லை முடியவில்லை; அதுவரை நமக்குள் ஏதாவது காரணத்தால் பிரச்சினை வரலாம், ஆனால் காரணமில்லாமல் வராமல் பார்த்துக் கொள்.
              </span><hr />
              <span className="span3">
                நம்முடைய திருமணத்திற்குப் பிறகு, உன்னுடைய அம்மா, அப்பா, மாமா, அத்தை என்று எல்லோரும் ஒன்றாக உன் பிறந்த நாளை கொண்டாடலாம்.<br />நீ வர வேண்டாம் என்று சொல்லிவிட்டாய், ஆனால் உன்னை பார்க்க வேண்டும் என்று எனக்கு ஆசைதான். வந்த பிறகும் நீ என்னைப் பார்க்க வரவில்லையெனில், அது எனக்கு மிகவும் கஷ்டமாக இருக்கும். அதை மன்னித்து விடு.

              </span><hr />
              <span className="span4">
                நம்முள் எவ்வளவோ சண்டைகள் வந்தாலும் ஒருபோதும் சந்தேகம் வந்ததில்லை, கோபமும் வந்ததில்லை, வருத்தம் மட்டுமே எனக்குப் பொழுதுபோக்காக இருந்தது. நீ என்னிடம் கலையிலேயே ஒழுங்காகப் பேசவில்லை என்றால் அந்த நாளே வீணாகிப் போய்விடுகிறது.
                <br />ஒருவேளை இரவில் ஒழுங்காகப் பேசவில்லை என்றால் தூக்கமே இல்லாமல் போய்விடுகிறது.</span><hr />
              <span className="span5">
                ஏதேனும் கேட்டால் நீ கோபப்படுகிறாய், எனவே நிறைய விஷயங்களை உன்னிடம் கேட்கவும் சொல்லவும் முடியாமல் மிகவும் கஷ்டப்படுகிறேன்.
              </span><hr />
              <span className="span6">
                எப்படியோ, எல்லாம் போகட்டும். பிரச்சினை இல்லை, இனி எல்லாம் மாறும் என்று நம்பிக்கையிலையே ஒவ்வொரு இரவும் கழிந்துகொண்டிருக்கிறது, ஜோதிபா.
              </span><hr />
              <span className="span7">
                இனிய பிறந்தநாள் வாழ்த்துக்கள், என் அன்பு மனைவிக்கு!

              </span><hr />
              <span className="span8">Always be happy; I will always be with you.</span>
              <div className='fingerPrint openVideoBtn nextBtn'>
                <button onClick={nextPage}>
                  <span>NEXT</span><img src={Page21} alt='cake' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

  )
}

export default PageFour
