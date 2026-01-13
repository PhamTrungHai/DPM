import { TranslationText } from 'dpm-shared/components';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    const isRouteError = isRouteErrorResponse(error);
    const errorkey = isRouteError ? `${error.status}` : '500';

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
                prefix={errorkey}
            />
            <TranslationText
                as={'p'}
                namespace={'error'}
                i18nKey={'message'}
                prefix={errorkey}
            />
            <button onClick={() => window.location.reload()}>
                <TranslationText i18nKey={'reload'} />
            </button>
        </main>
    );
}
