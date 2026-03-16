import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Rooms } from './components/Rooms';
import { Experiences } from './components/Experiences';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Booking } from './components/Booking';
import { Map } from './components/Map';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Rooms />
          <Experiences />
          <Blog />
          <Gallery />
          <Testimonials />
          <About />
          <Booking />
          <Map />
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
