import React, { useState, useRef, useEffect } from "react";
import AppTextAreaBox from "../components/AppTextAreaBox";
import AppButton from "../components/AppButton";
import '../assets/styles/Home.css';
import {Stack} from "@mui/material";
import NutritionalAPI from "../services/NutritionalAPI";
import AppNutritionalBox from "../components/AppNutritionalBox";
import '../assets/styles/NutrionalInfo.css'
import { Snackbar, Alert } from '@mui/material';
   const AppNutritionalInfo = () => {
        const [text, setText] = useState("");
        const [isPopupVisible, setPopupVisible] = useState(false);
        const popupRef = useRef<HTMLDivElement | null>(null);
        const [singleIngredientData, setSingleIngredientDataData] = useState<any>(null);
        const [openSnackbar, setOpenSnackbar] = useState(false);
        const [snackbarMessage, setSnackbarMessage] = useState('');

        const handleSnackbarClose = () => {
            setOpenSnackbar(false);
        };
        const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setText(event.target.value);
        };

        const onAnalyseButtonClick = async () => {
            try {
                // Trim the text to remove any leading or trailing whitespace
                const trimmedText = text.trim();

                // Check if the text is empty after trimming
                if (!trimmedText) {
                    setSnackbarMessage('Please enter some ingredients before analyzing.');
                    setOpenSnackbar(true);
                    return; // Exit the function early
                }

                const api = new NutritionalAPI()
                 // Assuming `text` is a string with the list of ingredients
                const ingredientsArray = text.split('\n').filter(ingredient => ingredient.trim() !== ""); // Convert the text into an array of ingredients


                // If no valid ingredients are found, block the operation
                if (ingredientsArray.length === 0) {
                    setSnackbarMessage('Please enter some valid ingredients before analysing.');
                    setOpenSnackbar(true);
                    return; // Exit the function early
                }
                const result = await api.fetchRecipeNutritionalInfo({ ingr: ingredientsArray });
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

        // const newRecipe = (): void => {
        //     setText("");
        //     setPopupVisible(false);
        // };

        useEffect(() => {
            if (isPopupVisible && popupRef.current) {
                if ("scrollIntoView" in popupRef.current) {
                    popupRef.current.scrollIntoView({behavior: 'smooth'});
                }
            }
        }, [isPopupVisible]);

        return (
            <div className="nutritional-info">
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert onClose={handleSnackbarClose} severity="warning" sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>

                <div className="container">
                    <p>Ready to evaluate your recipe? Just type in your ingredients, like '1 cup rice, 100g chickpeas.' Make sure to list each one on a separate line.</p>
                </div>
                <div className="container">
                    <div className={`content ${isPopupVisible ? 'half-width' : 'full-width'}`}>
                        <AppTextAreaBox
                            value={text}
                            onChange={handleTextChange}
                            readOnly={isPopupVisible}
                            rows={10} // Adjust rows as needed
                            cols={30}

                        />
                        <Stack sx={{alignItems: "center"}}>
                           {!isPopupVisible && (
                            <AppButton label="ANALYSE" onClick={onAnalyseButtonClick}/>
                        )}
                        </Stack>
                    </div>

                    {isPopupVisible && (
                            <div className="content half-width" ref={popupRef}>
                                <div className="nutritional-parent">
                                   <AppNutritionalBox data={singleIngredientData}/>
                                    <p className="approximation-guidelines"> *Approximation guidelines</p>
                                </div>

                                <Stack sx={{alignItems: "center"}} >
                                    <AppButton onClick={closePopup} label="UPDATE"/>
                                    {/*<AppButton onClick={newRecipe} label="CLEAR"/>*/}
                                </Stack>
                        </div>
                    )}
                </div>
            </div>
        );
   }

export default AppNutritionalInfo;
