import { Cloud, Droplets, Sun, Wind } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const WeatherWidget = () => {
  const { data: weather, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      // Simulated weather data
      return {
        temperature: 24,
        condition: "Sunny",
        humidity: 65,
        windSpeed: 12,
      };
    },
  });

  if (isLoading) {
    return (
      <div className="animate-pulse bg-white/50 rounded-lg p-6 shadow-lg">
        <div className="h-20 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-inter font-semibold text-primary mb-4">Today's Weather</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Sun className="text-yellow-500" />
          <span>{weather?.temperature}°C</span>
        </div>
        <div className="flex items-center gap-2">
          <Cloud className="text-gray-500" />
          <span>{weather?.condition}</span>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-500" />
          <span>{weather?.humidity}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="text-primary" />
          <span>{weather?.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;