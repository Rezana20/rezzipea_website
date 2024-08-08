import React from 'react';

interface AppTextAreaBoxProps {
    rows?: number;
    cols?: number;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    value: string;
    readOnly: boolean
}


function AppTextAreaBox({readOnly, value, onChange, placeholder, rows = 5, cols = 500 }: AppTextAreaBoxProps) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            readOnly={readOnly}
        />
    );
}
export default AppTextAreaBox;