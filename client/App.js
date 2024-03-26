import React from 'react';
import { useSelector } from 'react-redux';
import {
  createTheme,
  ThemeProvider
} from '@material-ui/core';
import Routes from './Routes';
import Layout from './Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B0c10',
    },
    secondary: {
      main: '#1F2833',
    },
  },
  typography: {
    fontFamily: 'Exo 2, sans-serif',
    h1: {
      fontFamily: 'Exo 2, sans-serif',
    },
    h2: {
      fontFamily: 'Exo 2, sans-serif',
    },
    h4: {
      fontFamily: 'Exo 2, sans-serif',
    },
    h5: {
      fontFamily: 'Exo 2, sans-serif',
    },
    body1: {
      color: '#C5C6C7',
    },
    body2: {
      color: 'white',
    },
  },
});

const App = () => {
  const auth = useSelector(state => state.auth);

  return (
    <ThemeProvider theme={theme}>
      <Layout auth={auth}>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
