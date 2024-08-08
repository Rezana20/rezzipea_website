import React, { useState, useRef, useEffect } from "react";
import AppTextAreaBox from "../components/AppTextAreaBox";
import AppButton from "../components/AppButton";
import '../assets/styles/Home.css';
import {Stack} from "@mui/material"; // Import the CSS file

function Home() {
    const [text, setText] = useState("");
    const [isPopupVisible, setPopupVisible] = useState(false);
    const popupRef = useRef<HTMLDivElement | null>(null);

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const onAnalyseButtonClick = (): void => {
        setPopupVisible(true);
    };

    const closePopup = (): void => {
        setPopupVisible(false);
    };

    const newRecipe = (): void => {
        setText("");
        setPopupVisible(false);
    };

    useEffect(() => {
        if (isPopupVisible && popupRef.current) {
            popupRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isPopupVisible]);

    return (
        <div className="container">
            <div className={`content ${isPopupVisible ? 'half-width' : 'full-width'}`}>
                <AppTextAreaBox
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Enter in your ingredients in the format 'qty unit ingredient,' per line"
                    readOnly={isPopupVisible}
                    rows={10} // Adjust rows as needed
                    cols={50} // Adjust cols as needed
                />
                {!isPopupVisible  && ( // Conditionally render the Analyse button
                    <AppButton label="ANALYSE" onClick={onAnalyseButtonClick} />
                )}
            </div>
            {isPopupVisible && (
                <div className="popup" ref={popupRef}>
                    <p>This is a popup message!</p>
                    <Stack spacing={2} direction="row">
                    <AppButton onClick={closePopup} label="UPDATE"></AppButton>
                    <AppButton onClick={newRecipe} label="CLEAR"></AppButton>
                    </Stack>
                </div>
            )}
        </div>
    );
}

export default Home;
