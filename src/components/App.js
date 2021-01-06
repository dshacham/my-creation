import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Context from './Context';
import Home from './Home';
import Ganim from './Ganim';
import NavBar from './NavBar';
import SlideInNav from './SlideInNav';
import Footer from './Footer';
import FooterMobile from './FooterMobile';
import Meonot from './Meonot';
import Schools from './Schools';
import Contact from './Contact';
import Gallery from './Gallery';

function App() {
  const [winWidth, setWinWidth] = useState('');
  const [navClass, setNavClass] = useState('/');
  const [gallery, setGallery] = useState('alifut');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setNavClass(window.location.pathname);
  }, []);

  useEffect(() => {
    window.innerWidth > 768 ?
      setWinWidth('desktop')
      :
      setWinWidth('mobile')
  }, []);

  const handleClick = (id) => {
    setGallery(id);
  }

  return (
    <div className="App">
      <Context.Provider value={{ navClass, setNavClass, winWidth, gallery, setGallery, handleClick }}>
        <Router>
          {winWidth === 'desktop' ?
            <NavBar />
            :
            <SlideInNav />
          }
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/meonot" exact component={Meonot} />
            <Route path="/ganim" exact component={Ganim} />
            <Route path="/schools" exact component={Schools} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Footer />
          {/* {winWidth === 'desktop' ?
            <Footer />
            :
            <FooterMobile />
          } */}
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;