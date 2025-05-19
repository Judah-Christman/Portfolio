export async function getWeather(city) {
  // Define apiKey
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  // Goto openweathermap using apiKey and variable for city info
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  // Throw error if no connection to openweatermap
  if (!res.ok) throw new Error("Failed to fetch weather");

  return res.json();
}
