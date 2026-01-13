import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppProvider from './providers/AppProvider';
import { Provider } from 'react-redux';
import getPreloadedState from './store/preloadState';
import configureAppStore from '@/store/configureStore';
import { registerInterceptors } from 'dpm-shared/api';

(async () => {
    const preloadedState = getPreloadedState();
    registerInterceptors();
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <Provider store={configureAppStore(preloadedState)}>
                <AppProvider />
            </Provider>
        </StrictMode>
    );
})();
