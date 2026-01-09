import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppProvider from './providers/AppProvider';
import { Provider } from 'react-redux';
import getPreloadedState from './store/preloadState';
import configureAppStore from '@/store/configureStore';

(async () => {
    const preloadedState = getPreloadedState();
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <Provider store={configureAppStore(preloadedState)}>
                <AppProvider />
            </Provider>
        </StrictMode>
    );
})();
