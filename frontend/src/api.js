export const getWeatherData = async (cityName) => {
    const response = await fetch(`https://weather-server-sx1b.onrender.com/api/weather?city=${cityName}`);
    return response.json();
};
