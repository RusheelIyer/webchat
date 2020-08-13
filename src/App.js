import React from 'react';
import { CookiesProvider } from 'react-cookie';

import MainWebChat from './MainWebChat';

const App = () => (
  <div className="App">
    <CookiesProvider>
        <MainWebChat />
    </CookiesProvider>
  </div>
);

export default App;
