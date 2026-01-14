import { Outlet } from 'react-router-dom';
import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import AppHeader from './components/Header';
import Sidebar from './components/Sidebar';

type RootLayoutProps = {} & React.HTMLAttributes<HTMLElement>;
const { Content } = Layout;

export default function RootLayout(props: RootLayoutProps) {
    console.log(props);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="h-full">
            <AppHeader />
            <Layout>
                <Sidebar drawerWidth={250} />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb
                        items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
                        style={{ margin: '16px 0' }}
                    />
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
