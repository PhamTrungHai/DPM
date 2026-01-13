import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

export type Language = 'vi' | 'en';

interface LanguageSelectProps {
    value: Language;
    className?: string;
    onChange: (lang: Language) => void;
}

const LanguageSelect: FC<LanguageSelectProps> = ({ value, onChange, className }) => {
    const handleChange = (event: SelectChangeEvent<Language>) => {
        onChange(event.target.value as Language);
    };

    return (
        <Select
            size="small"
            className={className}
            variant="standard"
            labelId="language-select-label"
            value={value}
            label="Language"
            disableUnderline
            onChange={handleChange}
        >
            <MenuItem value="vi">VI</MenuItem>
            <MenuItem value="en">EN</MenuItem>
        </Select>
    );
};

export default LanguageSelect;
