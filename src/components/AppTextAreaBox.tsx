import React from 'react';
import '../assets/styles/TextArea.css'

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
            className="text-area-pre-wrap"
        />
    );
}
export default AppTextAreaBox;