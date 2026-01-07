import App from '@/App';
import RootLayout from '@/layouts/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';

export const router = createBrowserRouter([
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
