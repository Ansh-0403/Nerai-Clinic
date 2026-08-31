import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import DentalTourism from './pages/DentalTourism';
import { SmoothScroll } from './components/ui/SmoothScroll';

export default function App() {
  return (
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dental-tourism" element={<DentalTourism />} />
      </Routes>
    </SmoothScroll>
  );
}
