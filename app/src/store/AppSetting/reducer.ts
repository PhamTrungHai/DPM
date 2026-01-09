import { PaletteMode } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppSetting = {
    tenantId: string;
    language: string;
    mode: PaletteMode;
};

export type AppSettingState = {
    /**
     * tasks data
     */
    setting: AppSetting;
};

const savedTheme = localStorage.getItem('theme') || 'light';
const savedLanguage = localStorage.getItem('language') || 'en';

export const initialAppSettingState: AppSettingState = {
    setting: {
        tenantId: '',
        language: savedLanguage,
        mode: savedTheme as PaletteMode,
    },
};

const slice = createSlice({
    name: 'AppSetting',
    initialState: initialAppSettingState,
    reducers: {
        toggleMode: (state, action: PayloadAction<PaletteMode>) => {
            state.setting.mode = action.payload;
            localStorage.setItem('theme', action.payload);
        },
        toggleLanguage: (state, action: PayloadAction<string>) => {
            state.setting.language = action.payload;
            localStorage.setItem('language', action.payload);
        },
    },
});

const { reducer } = slice;

export const { toggleMode, toggleLanguage } = slice.actions;

export default reducer;
