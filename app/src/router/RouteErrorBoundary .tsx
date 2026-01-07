import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function RouteErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <p>Resource not found.</p>;
        }

        if (error.status === 401) {
            return <p>Unauthorized access.</p>;
        }

        return (
            <p>
                {error.status}: {error.statusText}
            </p>
        );
    }

    if (error instanceof Error) {
        return <p>{error.message}</p>;
    }

    return <p>Unknown error.</p>;
}
