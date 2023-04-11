import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mechanical from './components/Courses/Mechanical';
import Electrician from './components/Courses/Electrician';
import Motor from './components/Courses/Motor';
import Welder from './components/Courses/Welder';
import Fees from './components/Admission/Fees';
import Rules from './components/Admission/Rules';
import Photo from './components/Photo';
import Alumni from './components/Alumni';
import Management from './components/About/Management';
import Teaching from './components/About/Teaching';
import NonTeaching from './components/About/NonTeaching';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
import { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }, [])

  
  return (
    <>
    {
      loading ?
        <Loader />
      :
      <Router>
         <ScrollToTop smooth />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mechanical' element={<Mechanical />} />
          <Route path='/electrician' element={<Electrician />} />
          <Route path='/motor' element={<Motor />} />
          <Route path='/welder' element={<Welder />} />
          <Route path='/fees' element={<Fees />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/photos' element={<Photo />} />
          <Route path='/alumni' element={<Alumni />} />
          <Route path='/management' element={<Management />} />
          <Route path='/teaching' element={<Teaching />} />
          <Route path='/nonteaching' element={<NonTeaching />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    }
    </>
  );
}

export default App;
