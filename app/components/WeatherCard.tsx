import React, { useEffect, useState } from "react";

interface WeatherCardProps {
  degree: number;
  image: string;
  day: string;
  highDegree: number;
  lowDegree: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  degree,
  image,
  day,
  highDegree,
  lowDegree,
}) => {
  const [generalCondition, setGeneralCondition] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (image) {
      const conditionText = image.toLowerCase(); // Ensure the image name is in lowercase for consistency

      if (conditionText.includes("clear") || conditionText.includes("sunny")) {
        setGeneralCondition("clear");
      } else if (
        conditionText.includes("cloudy") ||
        conditionText.includes("overcast") ||
        conditionText.includes("fog") ||
        conditionText.includes("mist")
      ) {
        setGeneralCondition("cloudy");
      } else if (
        conditionText.includes("rain") ||
        conditionText.includes("drizzle") ||
        conditionText.includes("shower")
      ) {
        setGeneralCondition("rainy");
      } else if (
        conditionText.includes("snow") ||
        conditionText.includes("sleet") ||
        conditionText.includes("blizzard")
      ) {
        setGeneralCondition("snowy");
      } else {
        setGeneralCondition("Unknown");
      }
    }

    setLoading(false); // Set loading to false once generalCondition is determined
  }, [image]);

  if (loading) {
    return <div>Loading...</div>; // Add a loading state or spinner
  }

  return (
    <div
      className="relative group bg-blue-50/40 text-white rounded-2xl p-4 hover:scale-105 transition-transform shadow-lg w-32 h-52 md:w-40 md:h-60"
      aria-label={`Weather forecast for ${day}`}
    >
      <h3 className="text-lg font-semibold text-center">{day}</h3>

      <img
        className="w-[50px] object-cover"
        src={`/icon/${generalCondition}.gif`}
        alt={`${generalCondition} Icon`}
      />

      <h4 className="text-3xl font-bold text-center">{degree}°</h4>

      <div className="flex flex-col gap-1 justify-between mt-4 text-sm">
        <p className="bg-black/20 px-2 py-1 font-bold rounded-lg">
          High: {highDegree}°
          <span className="sr-only">{`High temperature of ${highDegree} degrees`}</span>
        </p>
        <p className="bg-black/20 px-2 py-1 font-bold rounded-lg">
          Low: {lowDegree}°
          <span className="sr-only">{`Low temperature of ${lowDegree} degrees`}</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
