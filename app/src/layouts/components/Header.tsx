import { Avatar, Button, Dropdown, Layout, Space, Tooltip, type MenuProps } from 'antd';
import {
    SettingOutlined,
    SearchOutlined,
    InboxOutlined,
    BellOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'My Account',
        disabled: true,
    },
    {
        type: 'divider',
    },
    {
        key: '2',
        label: 'Profile',
        extra: '⌘P',
    },
    {
        key: '3',
        label: 'Billing',
        extra: '⌘B',
    },
    {
        key: '4',
        label: 'Settings',
        icon: <SettingOutlined />,
        extra: '⌘S',
    },
];
export default function AppHeader() {
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
            }}
        >
            <div>
                <img
                    src="/src/assets/logo.svg"
                    alt="Logo"
                    style={{ width: 100, marginRight: 16 }}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', order: 2, float: 'right' }}>
                <Space align="center">
                    <Tooltip title="Open link">
                        <Button
                            href="https://example.com"
                            target="_blank"
                            type="link"
                            icon={<SearchOutlined style={{ fontSize: 20 }} />}
                        ></Button>
                    </Tooltip>

                    <Tooltip title="Open link">
                        <Button
                            href="https://example.com"
                            target="_blank"
                            type="link"
                            icon={<InboxOutlined style={{ fontSize: 20 }} />}
                        ></Button>
                    </Tooltip>
                    <Tooltip title="Open link">
                        <Button
                            href="https://example.com"
                            target="_blank"
                            type="link"
                            icon={<BellOutlined style={{ fontSize: 20 }} />}
                        ></Button>
                    </Tooltip>

                    <Tooltip title="Open link">
                        <Button
                            href="https://example.com"
                            target="_blank"
                            type="link"
                            icon={<SettingOutlined style={{ fontSize: 20 }} />}
                        ></Button>
                    </Tooltip>
                    <Dropdown
                        trigger={['click']}
                        menu={{ items }}
                        styles={{
                            root: {
                                top: '60px',
                            },
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Avatar
                                size={'large'}
                                icon={<UserOutlined />}
                            />
                        </a>
                    </Dropdown>
                </Space>
            </div>
        </Header>
    );
}
