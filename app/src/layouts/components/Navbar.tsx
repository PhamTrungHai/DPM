import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import AccountMenu from '@/components/AccountMenu';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => (
    <AppBar
        position="fixed"
        className="grow"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
        <Toolbar className="flex justify-between">
            <Typography variant="h6">Dashboard</Typography>
            <AccountMenu />
        </Toolbar>
    </AppBar>
);

export default Navbar;
