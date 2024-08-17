import React from 'react';
class NutritionalAPI {

    async fetchIndividualNutritionalInfo(ingr: string): Promise<any> {
        const app_id = '913c651f';
        const app_key = 'b52e67e1ea5f45ea99631e96de56b134';
        const url = `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${encodeURIComponent(ingr)}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    async fetchRecipeNutritionalInfo(data: {ingr: string[]}): Promise<any> {
        const app_id = '913c651f';
        const app_key = 'b52e67e1ea5f45ea99631e96de56b134';
        const url = `https://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
}

export default NutritionalAPI;