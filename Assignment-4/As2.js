function fahrenheittoCelsius(fahrenheit) {
  return (5 * (fahrenheit - 32)) / 9;
}

const celsiustoFahrenheit = (celsius) => (9 * celsius) / 5 + 32;

const tempcel = 60;
const tempFah = 45;

console.log(`${tempcel}°C is ${celsiustoFahrenheit(tempcel)}°F`);
console.log(`${tempFah}°F is ${fahrenheittoCelsius(tempFah)}°C`);
