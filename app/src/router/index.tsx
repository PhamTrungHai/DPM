import App from '@/App';
import RootLayout from '@/layouts/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';

export function createRouter() {
    return createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <App />,
                },
            ],
        },
    ]);
}
