// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Phones from "./components/Phones"; 
import SC from "./components/simcards"; 
import FB from "./components/inquiry"; 
import IntroductionPage from './components/introductionPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Added flex container */}
        <Navbar />
        <main className="flex-grow"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<><HeroSection /><IntroductionPage /></>} />
            <Route path="/introduction" element={<><HeroSection /><IntroductionPage /></>} />
            <Route path="/simcards" element={<SC />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/feedback" element={<FB />} />
          </Routes>
        </main>

        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
