import React from "react";
import { Button} from '@mui/material';
import '../assets/styles/Button.css'
import '../assets/styles/Home.css'

interface AppButtonProps {
    label: string;
    onClick: (event: React.MouseEvent) => void;
}

function AppButton({label, onClick}: AppButtonProps) {
    return(
        <div className="app-button">
            <Button sx={{ color:'#FFFFFF' }} onClick={onClick}>{label}</Button>
        </div>

    )
}

export default AppButton;