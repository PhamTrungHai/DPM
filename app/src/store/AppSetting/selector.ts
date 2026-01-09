import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

export const selectAppSetting = createSelector(
    (state: RootState) => state.AppSetting.setting,
    (setting) => setting
);
