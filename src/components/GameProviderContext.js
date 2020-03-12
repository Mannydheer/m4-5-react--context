import React from 'react';

import useInterval from '../hooks/use-interval.hook';
import items from './data';
import usePersistedState from '../hooks/use-persisted-state.hook';



export const GameProviderContext = React.createContext(null);
//ask why export here./ 
export const GameProvider = ({children}) => {
    // ----------------------------
    // 
    const [numCookies, setNumCookies] = usePersistedState('numCookies', 1000); 
    //double check

  const [purchasedItems, setPurchasedItems] = usePersistedState(
    'purchasedItems',
    {
      cursor: 0,
      grandma: 0,
      farm: 0
    }
  );
//   -----------------

//this will always run... so when I render the page, this will begin because I call GameProvider in index.js - I dont need to put this in any of GameProviders
// children because this needs to be happening all the time... 
const calculateCookiesPerSecond = purchasedItems => {
    return Object.keys(purchasedItems).reduce((acc, itemId) => {
      const numOwned = purchasedItems[itemId];
      const item = items.find(item => item.id === itemId);
      const value = item.value;
  
      return acc + value * numOwned;
    }, 0);
  };

  //same applies for useInterval. 
  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerSecond(purchasedItems);

    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  return (<GameProviderContext.Provider value={{numCookies, setNumCookies, purchasedItems, setPurchasedItems, cookiesPerSecond: calculateCookiesPerSecond(purchasedItems)}}
    >
        {/* children being App again.  */}
        {children}
    </GameProviderContext.Provider>);

    

};


