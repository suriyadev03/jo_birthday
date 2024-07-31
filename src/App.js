import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import PageThree from './Components/PageThree';
import PageFour from './Components/PageFour';
import PageFive from './Components/PageFive';
import PageSix from './Components/PageSix';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<PageOne />} />
           <Route path="pageTwo" element={<PageTwo />} />
           <Route path="pageThree" element={<PageThree />} />
           <Route path="pageFour" element={<PageFour />} />
           <Route path="pageFive" element={<PageFive />} />
           <Route path="pageSix" element={<PageSix />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
