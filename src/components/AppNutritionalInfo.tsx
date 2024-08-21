import React, { useState, useRef, useEffect } from "react";
import AppTextAreaBox from "../components/AppTextAreaBox";
import AppButton from "../components/AppButton";
import '../assets/styles/Home.css';
import {Stack,IconButton} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download'; // Importing the download icon from Material-UI
import NutritionalAPI from "../services/NutritionalAPI";
import AppNutritionalBox from "../components/AppNutritionalBox";
import '../assets/styles/NutrionalInfo.css'
import { Snackbar, Alert } from '@mui/material';
import html2canvas from "html2canvas";
import {paddingLeft} from "html2canvas/dist/types/css/property-descriptors/padding";
   const AppNutritionalInfo = () => {
        const [text, setText] = useState("");
        const [isPopupVisible, setPopupVisible] = useState(false);
        const popupRef = useRef<HTMLDivElement | null>(null);
        const [ingredientData, setIngredientData] = useState<any>(null);
        const [openSnackbar, setOpenSnackbar] = useState(false);
        const [snackbarMessage, setSnackbarMessage] = useState('');
        const [showPre, setShowPre] = useState(false); // State to toggle between textarea and pre
        const [showWatermark, setShowWatermark] = useState(false);
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
                setIngredientData(result)
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
        const handleDownloadImage = () => {
            const wrapper = document.querySelector('.capture-wrapper') as HTMLElement;
            const buttons = document.querySelector('.buttons-stack') as HTMLElement;
            // Show the watermark before capturing the image
            setShowWatermark(true);
            // Hide the buttons temporarily
            if (buttons) {
                // Hide the buttons temporarily
                buttons.style.visibility = 'hidden';
            }

            // Temporarily increase the width of the wrapper
            const originalWidth = wrapper.style.width;
            wrapper.style.width = '650px';  // Adjust to your desired width
            buttons.style.display = 'flex';  // Restore the buttons' visibility
            setShowPre(true);  // Show the preformatted text instead of the textarea

            setTimeout(() => {
                html2canvas(wrapper).then((canvas) => {
                    const link = document.createElement('a');
                    link.href = canvas.toDataURL('image/png');
                    link.download = 'rezzipeas-nutritional-info.png';
                    link.click();

                    // Revert the visibility after capture
                    if (buttons) {
                        buttons.style.visibility = 'visible';
                    }

                    // Revert the width after capture
                    wrapper.style.width = originalWidth;
                    // Hide the watermark after capturing the image
                    setShowWatermark(false);
                    setShowPre(false);  // Revert to showing the textarea after the download
                });
            }, 100); // Give time for the DOM to update
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
                <div className="container capture-wrapper">
                    <div className={`content ${isPopupVisible ? 'half-width' : 'full-width'}`}>
                        {/*<AppTextAreaBox*/}
                        {/*    value={text}*/}
                        {/*    onChange={handleTextChange}*/}
                        {/*    readOnly={isPopupVisible}*/}
                        {/*    rows={10} // Adjust rows as needed*/}
                        {/*    cols={30}*/}

                        {/*/>*/}
                        {/* Conditionally render textarea or pre */}
                    {!showPre ? (
                        <AppTextAreaBox
                            value={text}
                            onChange={handleTextChange}
                            readOnly={isPopupVisible}
                            rows={10}
                            cols={30}
                        />
                    ) : (
                        <div className="text-area-pre-wrap">
                            {text.split(',').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    )}
                        <Stack sx={{alignItems: "center"}}>
                           {!isPopupVisible && (
                            <AppButton label="ANALYSE" onClick={onAnalyseButtonClick}/>
                        )}
                        </Stack>
                    </div>

                    {isPopupVisible && (
                            <div className="content half-width" ref={popupRef}>
                                <div className="nutritional-parent">
                                   <AppNutritionalBox data={ingredientData}/>
                                    <p className="approximation-guidelines"> *Approximation guidelines</p>
                                </div>
                                {/* Watermark <p> element */}
                                {showWatermark && (
                                    <p className="watermark-text">
                                        Created with Rezzipeas, visit www.rezzipeas.co.uk
                                    </p>
                                )}
                                <div className="container buttons-stack"> {/* Add a class or ID to target */}
                                <Stack direction="row" >
                                    <AppButton onClick={closePopup} label="UPDATE"/>
                                    {/*<AppButton onClick={newRecipe} label="CLEAR"/>*/}
                                    <IconButton
                                        onClick={handleDownloadImage}
                                        sx={{bottom: 0, right: 0 }}
                                        aria-label="download"
                                    >
                                        <DownloadIcon />
                                    </IconButton>
                                </Stack>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        );
   }

export default AppNutritionalInfo;
