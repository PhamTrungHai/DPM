import { RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ConfigProvider } from 'antd';
import { useMemo, FC } from 'react';
import { getTheme } from '@/theme';
import { createRouter } from '@/router';
import i18n from 'dpm-shared/i18n';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { selectAppSetting } from '@/store/AppSetting/selector';
import { loadInit } from '@/store/AppSetting/reducer';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';

const AppProvider: FC = () => {
    const dispatch = useAppDispatch();
    dispatch(loadInit());

    const { mode } = useAppSelector(selectAppSetting);
    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
                <ConfigProvider theme={theme}>
                    <RouterProvider router={createRouter()} />
                </ConfigProvider>
            </I18nextProvider>
        </QueryClientProvider>
    );
};

export default AppProvider;
