import React from "react";
import { Button} from '@mui/material';

interface AppButtonProps {
    label: string;
    onClick: (event: React.MouseEvent) => void;
}

function AppButton({label, onClick}: AppButtonProps) {
    return(
        <Button onClick={onClick}>{label}</Button>
    )
}

export default AppButton;