import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import ThemeContext from './contexts/themeContext';
import themes from './themes/themes';
import Routes from './Routes';
// this is react-router-dom, whereas the other components list react-router?
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import "regenerator-runtime/runtime";

const Index = () => {
  const modes = [
    { value: 'defaultTheme', active: true },
    { value: 'darkTheme', active: false },
    { currentMode: 'defaultTheme' }
    // { value: 'kateTheme', active: false },
    // { value: 'vaderette', active: false },
    // { value: 'tylerTheme', active: false },
    // { value: 'happi', active: false }
  ];
  const [context, setContext] = useState(modes);
  const serveMode = context.reduce((acc, mode) => {
    if (mode.active) acc = mode.value;
    return acc;
  }, 'defaultTheme');

  return (
    <ThemeContext.Provider value={[context, setContext]}>
      <ThemeProvider theme={themes[serveMode]}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

hot(Index);

render(<Index />, document.getElementById('root'));
