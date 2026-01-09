import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

interface SidebarProps {
    drawerWidth: number;
}

const DrawerCollapseWidth = 56;
const DrawerFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    boxShadow: theme.shadows[1], // Optional: Shadow to separate the footer from content
}));

const Sidebar: FC<SidebarProps> = ({ drawerWidth }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [drawerDirection, setDrawerDirection] = useState<'ltr' | 'rtl'>('ltr');

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
        setDrawerDirection(drawerDirection === 'ltr' ? 'rtl' : 'ltr');
    };
    return (
        <Drawer
            className=""
            anchor="left"
            open={isOpen}
            variant="permanent"
            sx={{
                width: isOpen ? drawerWidth : DrawerCollapseWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: isOpen ? drawerWidth : DrawerCollapseWidth,
                    boxSizing: 'border-box',
                    transition: 'width 0.3s',
                },
            }}
        >
            <Toolbar />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem
                        component={NavLink}
                        to={'/'}
                        key={text}
                        disablePadding
                        sx={{ display: 'block' }}
                    >
                        <ListItemButton
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                },
                                isOpen
                                    ? {
                                          justifyContent: 'initial',
                                      }
                                    : {
                                          justifyContent: 'center',
                                      },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    isOpen
                                        ? {
                                              mr: 3,
                                          }
                                        : {
                                              mr: 'auto',
                                          },
                                ]}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={[
                                    {
                                        whiteSpace: 'nowrap',
                                    },
                                    isOpen
                                        ? {
                                              display: 'block',
                                          }
                                        : {
                                              display: 'none',
                                          },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <DrawerFooter>
                <IconButton onClick={toggleDrawer}>
                    {drawerDirection === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerFooter>
        </Drawer>
    );
};

export default Sidebar;
