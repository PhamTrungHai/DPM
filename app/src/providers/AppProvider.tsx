import { RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, FC } from 'react';
import { getTheme } from '@/theme';
import { createRouter } from '@/router';
import i18n from 'dpm-shared/i18n';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { selectAppSetting } from '@/store/AppSetting/selector';
import { loadInit } from '@/store/AppSetting/reducer';

const AppProvider: FC = () => {
    const dispatch = useAppDispatch();
    dispatch(loadInit());

    const { mode } = useAppSelector(selectAppSetting);
    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={createRouter()} />
            </ThemeProvider>
        </I18nextProvider>
    );
};

export default AppProvider;
