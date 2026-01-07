import TranslationText from '@/components/TranslationText';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    const isRouteError = isRouteErrorResponse(error);
    const errorkey = isRouteError ? `${error.status}` : '500';

    let title = 'Something went wrong';
    let message = 'An unexpected error occurred.';

    if (isRouteError) {
        title = `Error ${error.status}`;
        message = error.statusText || message;
    } else if (error instanceof Error) {
        message = error.message;
    }

    return (
        <main
            className="pt-16 p-4 container mx-auto"
            role="alert"
            aria-live="assertive"
        >
            <TranslationText
                as={'h1'}
                namespace={'error'}
                i18nKey={`title`}
                prefix={isRouteError ? `${error.status}` : '500'}
            />
            <TranslationText
                as={'p'}
                namespace={'error'}
                i18nKey={'message'}
                prefix={isRouteError ? `${error.status}` : '500'}
            />
            <button onClick={() => window.location.reload()}>
                <TranslationText i18nKey={'reload'} />
            </button>
        </main>
    );
}
