import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Context from './Context';
import Home from './Home';
import NavBar from './NavBar';
import SlideInNav from './SlideInNav';
import Footer from './Footer';
import FooterMobile from './FooterMobile';

function App() {
  const [winWidth, setWinWidth] = useState('');
  const [navClass, setNavClass] = useState('/');

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

  return (
    <div className="App">
      <Context.Provider value={{ navClass, setNavClass, winWidth }}>
        <Router>
          {winWidth === 'desktop' ?
            <NavBar />
            :
            <SlideInNav />
          }
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
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