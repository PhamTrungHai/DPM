import { KeyPrefix, Namespace } from 'i18next';
import { ElementType } from 'react';
import { useTranslation } from 'react-i18next';
type TranslationTextProps = {
    i18nKey: TemplateStringsArray | TemplateStringsArray[] | string | string[];
    prefix?: KeyPrefix<Namespace>;
    namespace?: Namespace;
    as?: ElementType;
};

const TranslationText = ({
    i18nKey,
    prefix = '',
    namespace = 'common',
    as: Component = 'p',
}: TranslationTextProps) => {
    const { t } = useTranslation(namespace, { keyPrefix: prefix });
    return <Component>{t(i18nKey)}</Component>;
};

export default TranslationText;
