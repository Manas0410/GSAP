import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
} from "./pages";
import Scroll from "./pages/scrollTrigger/scroll";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/" element={<Home />} />
          <Route path="/scroll" element={<Scroll />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
