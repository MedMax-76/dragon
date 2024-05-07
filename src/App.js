import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import Nav from "./page/Nav";
import Header from "./Header";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
import Page3 from "./page/Page3";
import Page4 from "./page/Page4";
import Page5 from "./page/Page5";
import Page6 from "./page/Page6";
import Page7 from "./page/Page7";
import Page8 from "./page/Page8";
import Page9 from "./page/Page9";
import Page10 from "./page/Page10";
import Page11 from "./page/Page11";
import Page12 from "./page/Page12";
import Footer from "./page/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/drag1" element={<Page1 />} />
          <Route path="/drag2" element={<Page2 />} />
          <Route path="/drag3" element={<Page3 />} />
          <Route path="/drag4" element={<Page4 />} />
          <Route path="/drag5" element={<Page5 />} />
          <Route path="/drag6" element={<Page6 />} />
          <Route path="/drag7" element={<Page7 />} />
          <Route path="/drag8" element={<Page8 />} />
          <Route path="/drag9" element={<Page9 />} />
          <Route path="/drag10" element={<Page10 />} />
          <Route path="/drag11" element={<Page11 />} />
          <Route path="/drag12" element={<Page12 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
