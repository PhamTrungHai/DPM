import { createTheme, PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) =>
    createTheme({
        palette: {
            mode,
            primary: { main: '#0082ce' },
        },
    });
