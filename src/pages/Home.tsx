import React from "react";
import '../assets/styles/Home.css';
import AppNutritionalInfo from "../components/AppNutritionalInfo";
import FoodCommunity from "../components/AppFoodCommunity";

const Home = () => {

        return (
            <div>
                <FoodCommunity />
                <div id="evaluation-tool-section">
                <AppNutritionalInfo />
                </div>
            </div>
        );
};

export default Home;
