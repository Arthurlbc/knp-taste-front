import React from 'react';
import './App.css';

import GridBoard from 'components/GridBoard/GridBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Le Jeu de la Vie</h1>
      </header>
      <GridBoard />
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css'
// import Grid from 'components/Grid/Grid';
// import { Provider, useSelector } from 'react-redux';
// import configureStore from 'configureStore';

// const store = configureStore()

// function App() {
//   return (
//     <Provider store={store}>
//       <main>
//         <Grid />
//       </main>
//     </Provider>
//   );
// }

// export default App;
