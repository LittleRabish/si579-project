/**
 * @const {Object<number, string>}
 * 
 * Maps Open-Meteo weather codes to corresponding emoji icons or descriptions.
 */
const weatherIcons = {
  0: '☀️', // Clear sky
  1: '🌤️', // Mainly clear
  2: '⛅', // Partly cloudy
  3: '☁️', // Overcast
  45: '🌫️', // Fog
  48: "Depositing Rime Fog",
  51: '🌦️', // Light drizzle
  53: '🌧️', // Moderate drizzle
  55: '🌧️', // Dense drizzle
  56: "Light Freezing Drizzle",
  57: "Dense Freezing Drizzle",
  61: '🌦️', // Slight rain
  63: '🌧️', // Moderate rain
  65: '🌧️', // Heavy rain
  66: "Light Freezing Rain",
  67: "Heavy Freezing Rain",
  71: '❄️', // Slight snow
  73: '🌨️', // Moderate snow
  75: '🌨️', // Heavy snow
  77: "Snow Grains",
  80: '🌦️', // Slight rain showers
  81: '🌧️', // Moderate rain showers
  82: '⛈️', // Violent rain showers
  85: '🌨️', // Slight snow showers
  86: '🌨️', // Heavy snow showers
  95: '⛈️', // Slight/Moderate thunderstorm
  96: '⛈️', // Thunderstorm with slight hail
  99: '⛈️', // Thunderstorm with heavy hail
};

export default weatherIcons;
