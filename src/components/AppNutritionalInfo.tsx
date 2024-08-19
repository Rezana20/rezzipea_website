import React, { useState, useRef, useEffect } from "react";
import AppTextAreaBox from "../components/AppTextAreaBox";
import AppButton from "../components/AppButton";
import '../assets/styles/Home.css';
import {Stack} from "@mui/material";
import NutritionalAPI from "../services/NutritionalAPI";
import AppNutritionalBox from "../components/AppNutritionalBox";
import '../assets/styles/NutrionalInfo.css'
   const AppNutritionalInfo = () => {
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
            <div className="nutritional-info">

                <div className="container">
                    <p>Try evaluating your recipe, Enter an ingredient list for what you are cooking,
                        like "1 cup rice, 100g chickpeas", etc.
                        Enter each ingredient on a new line.</p>
                </div>
                <div className="container">
                    <div className={`content ${isPopupVisible ? 'half-width' : 'full-width'}`}>
                        <AppTextAreaBox
                            value={text}
                            onChange={handleTextChange}

                            readOnly={isPopupVisible}
                            rows={10} // Adjust rows as needed
                            cols={50} // Adjust cols as needed
                        />
                        <Stack sx={{alignItems: "center"}}>
                           {!isPopupVisible && (
                            <AppButton label="ANALYSE" onClick={onAnalyseButtonClick}/>
                        )}
                        </Stack>
                    </div>

                    {isPopupVisible && (
                        <div className="container">
                            <div className="content half-width" ref={popupRef}>
                                <div className="nutritional-parent">
                                   <AppNutritionalBox data={singleIngredientData}/>
                                </div>
                                <div className="content">
                                <Stack spacing={2} direction="row" >
                                    <AppButton onClick={closePopup} label="UPDATE"/>
                                    <AppButton onClick={newRecipe} label="CLEAR"/>
                                </Stack>
                                 </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
   }

export default AppNutritionalInfo;
