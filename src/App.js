import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { NotFound } from './components/navbar/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
