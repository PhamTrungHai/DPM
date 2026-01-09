import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;

export type PartialRootState = Partial<RootState>;

const configureAppStore = (preloadedState: PartialRootState = {}) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
    });

    return store;
};

// Infer types from the store itself
export type AppStore = ReturnType<typeof configureAppStore>;

export type StoreDispatch = ReturnType<typeof configureAppStore>['dispatch'];

export type StoreGetState = ReturnType<typeof configureAppStore>['getState'];

// Use throughout app instead of plain `useDispatch` and `useSelector`
// @see https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useAppDispatch = useDispatch.withTypes<StoreDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default configureAppStore;
