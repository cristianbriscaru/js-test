import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { BrowserRouter ,Route } from "react-router-dom";

import theme from './assets/styles/theme.style';
import { store } from './store';
import Dashboard from './layouts/Dashboard';
import Router from './routes/Router';

function App() {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Provider store={store}>
                <BrowserRouter>
                    <Dashboard >
                        <Route component={Router} />
                    </Dashboard>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    )
}

export default App;
