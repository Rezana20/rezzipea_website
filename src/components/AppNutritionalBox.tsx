import React from "react";
import '../assets/styles/NutrionalInfo.css'

interface Nutrient {
    label: string;
    quantity: number;
    unit: string;
}
interface NutritionalBoxProps {
    data: any
}

function AppNutritionalBox({ data }: NutritionalBoxProps): React.JSX.Element {
    // const nutrients: { [key: string]: Nutrient } = JSON.parse(data).totalNutrientsKCal;
    const nutrients: { [key: string]: Nutrient } = data.totalNutrientsKCal;
    const totalNutrients: { [key: string]: Nutrient } = data.totalNutrients;
    // Calculate the number of top nutrients to display (dynamically up to 7)
    const maxTopNutrients = Math.min(7, Object.keys(totalNutrients).length);

    // Sort nutrients by quantity (absolute value) and get up to maxTopNutrients
    const topNutrients = Object.entries(totalNutrients)
        .sort(([, a], [, b]) => b.quantity - a.quantity)
        .slice(0, maxTopNutrients);


    return(
        <div>
            <div className="nutritional-info-container">
                <h1 className="nutritional-info-heading">Nutritional Information</h1>
            </div>
            {Object.keys(nutrients).map((key) => {
                const nutrient = nutrients[key];
                return (
                    <div key={key} className="nutrient-info">
                        <span className="nutrient-label">{nutrient.label}</span>
                        <span className="nutrient-quantity">{nutrient.quantity} {nutrient.unit}</span>

                    </div>
                );
            })}
             {topNutrients.map(([key, nutrient]) => {

                 return (
                     <div key={key} className="nutrient-info">
                         <span className="nutrient-label">{nutrient.label}</span>
                         <span className="nutrient-quantity">{nutrient.quantity.toFixed(2)} {nutrient.unit}</span>

                     </div>
                 );
             })}
        </div>
    )
}

export default AppNutritionalBox;