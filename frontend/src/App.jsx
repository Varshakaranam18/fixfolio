import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import LandingSection from './Components/LandingSection.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingSection />} />
      </Routes>
    </Router>
  );
}

export default App;
