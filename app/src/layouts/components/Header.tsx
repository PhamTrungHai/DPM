import { useTranslation } from 'react-i18next';
import TranslationText from '@/components/TranslationText';

export default function Header() {
    const { i18n } = useTranslation();
    return (
        <header>
            <TranslationText
                className=""
                as={'h1'}
                i18nKey={'welcome'}
            />
            <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            <button onClick={() => i18n.changeLanguage('vi')}>VI</button>
        </header>
    );
}
