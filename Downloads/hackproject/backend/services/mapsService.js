const axios = require('axios');

const getRoute = async (origin, destination) => {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/directions/json', {
            params: {
                origin,
                destination,
                key: process.env.GOOGLE_MAPS_API_KEY,
            },
        });

        return response.data; // This includes route details like distance and ETA
    } catch (error) {
        console.error('Error fetching route:', error);
        throw new Error('Failed to fetch route.');
    }
};

module.exports = { getRoute };
