    import React, { useState, useRef, useEffect } from "react";
    import AppTextAreaBox from "../components/AppTextAreaBox";
    import AppButton from "../components/AppButton";
    import '../assets/styles/Home.css';
    import {Stack} from "@mui/material";
    import NutritionalAPI from "../services/NutritionalAPI";
    import AppNutritionalBox from "../components/AppNutritionalBox";
    import AppBanner from "../components/AppBanner"; // Import the CSS file

    function Home() {
        const [text, setText] = useState("");
        const [isPopupVisible, setPopupVisible] = useState(false);
        const popupRef = useRef<HTMLDivElement | null>(null);
        const [singleIngredientData, setSingleIngredientDataData] = useState<any>(null);

        const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setText(event.target.value);
        };

        const onAnalyseButtonClick = async () => {
            try {
                const api = new NutritionalAPI()
                const result = await api.fetchIndividualNutritionalInfo(text);
                setSingleIngredientDataData(result)
                setPopupVisible(true);
                console.log(result.totalNutrientsKCal)
                console.log(result)
            } catch (error) {
                console.error('Error fetching nutrition data:', error);
            }
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
                if ("scrollIntoView" in popupRef.current) {
                    popupRef.current.scrollIntoView({behavior: 'smooth'});
                }
            }
        }, [isPopupVisible]);

        return (
            <div>
                {/*<AppBanner/>*/}

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
                    {!isPopupVisible && (
                        <AppButton label="ANALYSE" onClick={onAnalyseButtonClick}/>
                    )}
                </div>
                {isPopupVisible && (
                    <div className="content half-width" ref={popupRef}>
                        <AppNutritionalBox data={singleIngredientData}/>
                        <Stack spacing={2} direction="row">
                            <AppButton onClick={closePopup} label="UPDATE"/>
                            <AppButton onClick={newRecipe} label="CLEAR"/>
                        </Stack>
                    </div>
                )}
            </div>
            </div>
        );
    }

    export default Home;
