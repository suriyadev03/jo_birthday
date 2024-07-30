import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import PageThree from './Components/PageThree';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<PageOne />} />
           <Route path="pageTwo" element={<PageTwo />} />
           <Route path="pageThree" element={<PageThree />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;