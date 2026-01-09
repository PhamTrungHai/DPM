import { initialAppSettingState } from './AppSetting/reducer';
import { PartialRootState } from './configureStore';

const getPreloadedState = (): PartialRootState => {
    return {
        AppSetting: {
            ...initialAppSettingState,
        },
    };
};

export default getPreloadedState;
