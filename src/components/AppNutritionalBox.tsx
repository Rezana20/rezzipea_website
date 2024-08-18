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
        </div>
    )
}

export default AppNutritionalBox;