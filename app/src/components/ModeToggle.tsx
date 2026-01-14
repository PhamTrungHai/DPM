import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { selectAppSetting } from '@/store/AppSetting/selector';
import { toggleMode } from '@/store/AppSetting/reducer';

type ModeToggleProps = {} & React.HTMLAttributes<HTMLElement>;

const ModeToggle = (props: ModeToggleProps) => {
    const dispatch = useAppDispatch();
    const { mode } = useAppSelector(selectAppSetting);

    console.log(props);
    const onToggleTheme = () => {
        dispatch(toggleMode(mode === 'light' ? 'dark' : 'light'));
    };
    return (
        <button onClick={onToggleTheme}>
            {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

export default ModeToggle;
