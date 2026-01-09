import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { selectAppSetting } from '@/store/AppSetting/selector';
import { toggleMode } from '@/store/AppSetting/reducer';

type ModeToggleProps = {};

const ModeToggle = (props: ModeToggleProps) => {
    const dispatch = useAppDispatch();
    const { mode } = useAppSelector(selectAppSetting);

    const onToggleTheme = () => {
        dispatch(toggleMode(mode === 'light' ? 'dark' : 'light'));
    };
    return (
        <IconButton
            color="inherit"
            onClick={onToggleTheme}
        >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    );
};

export default ModeToggle;
