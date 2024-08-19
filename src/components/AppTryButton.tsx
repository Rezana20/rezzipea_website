import React from "react";
import { Button} from '@mui/material';
import '../assets/styles/Quote.css'


interface AppButtonProps {
    label: string;
    onClick: (event: React.MouseEvent) => void;
}

function AppTryButton({label, onClick}: AppButtonProps) {
    return(
        <div className="try-button">
            <Button sx={{ color:'#FFFFFF' }} onClick={onClick}>{label}</Button>
        </div>

    )
}

export default AppTryButton;