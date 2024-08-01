import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import PageThree from './Components/PageThree';
import PageFour from './Components/PageFour';
import PageFive from './Components/PageFive';
import PageSix from './Components/PageSix';
import { useEffect, useState } from 'react';
import audioFile from '../src/assets/audio.mp3';


function App() {
  const [audioPlay, setAudioPlay] = useState(false)
  const [audio] = useState(new Audio(audioFile));

  useEffect(() => {
    if (audioPlay) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audioPlay])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<PageOne setAudioPlay={setAudioPlay} />} />
          <Route path="pageTwo" element={<PageTwo />} />
          <Route path="pageThree" element={<PageThree />} />
          <Route path="pageFour" element={<PageFour />} />
          <Route path="pageFive" element={<PageFive />} />
          <Route path="pageSix" element={<PageSix  setAudioPlay={setAudioPlay}/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
