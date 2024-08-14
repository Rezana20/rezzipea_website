import React from "react";

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
            {Object.keys(nutrients).map((key) => {
                const nutrient = nutrients[key];
                return (
                    <p key={key}>
                        {nutrient.label} | {nutrient.quantity} {nutrient.unit}
                    </p>
                );
            })}
        </div>
    )
}

export default AppNutritionalBox;