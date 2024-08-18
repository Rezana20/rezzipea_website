import React from "react";
import '../assets/styles/Home.css';
import AppNutritionalInfo from "../components/AppNutritionalInfo";
import FoodCommunity from "../components/AppFoodCommunity";

const Home = () => {

        return (
            <div>
                <FoodCommunity />
                <AppNutritionalInfo />
            </div>
        );
};

export default Home;
