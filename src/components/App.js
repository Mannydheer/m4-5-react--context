import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import Home from './Home';
import Game from './Game';
import useInterval from '../hooks/use-interval.hook';

// import items from './data';
import { GameProviderContext } from './GameProviderContext';


//

function App(props) {

  const {numCookies, setNumCookies, cookiesPerSecond } = React.useContext(GameProviderContext)
  // const [numCookies, setNumCookies] = React.useState(1000);
  // const [purchasedItems, setPurchasedItems] = React.useState({
  //   cursor: 0,
  //   grandma: 0,
  //   farm: 0
  // });
  useInterval(() => {
    setNumCookies(numCookies + cookiesPerSecond);
  }, 1000);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
