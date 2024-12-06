interface WeatherDetailsProps {
  data: {
    current?: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  if (!data.current) {
    return null;
  }

  return (
    <div className="px-12 py-5 ">
      <h1 className="mb-4 text-2xl text-white italic font-bold">
        Weather Details
        <span className="sr-only">
          {" "}
          - This section provides detailed weather statistics and conditions.
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic font-bold">
        <div
          className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backgroundImage: 'url("/bg/wind.gif")',
            backgroundSize: "cover", // To cover the entire div area
            backgroundPosition: "center", // Position the image in the center
          }}
        >
          <div className="text-2xl">
            <h3>Wind Speed</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Wind Speed: ${data.current.wind_kph} kph`}
            >
              {data.current.wind_kph} kph
            </h3>
            <span className="sr-only">
              This section displays the current wind speed in miles per hour
              (mph).
            </span>
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Humidity</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Humidity: ${data.current.humidity}%`}
            >
              {data.current.humidity}%
            </h3>
            <span className="sr-only">
              This section displays the current humidity in percentage.
            </span>
          </div>
        </div>

        <div
          className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backgroundImage: 'url("/bg/direction.svg")',
            backgroundSize: "cover", // To cover the entire div area
            backgroundPosition: "center", // Position the image in the center
          }}
        >
          <div className="text-2xl">
            <h3>Wind Direction</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Wind Direction: ${data.current.wind_dir}`}
            >
              {data.current.wind_dir}
            </h3>
            <span className="sr-only">
              This section displays the current wind direction.
            </span>
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Sunrise</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Sunrise: ${data.forecast?.forecastday[0]?.astro.sunrise}`}
            >
              {data.forecast?.forecastday[0]?.astro.sunrise}
            </h3>
            <span className="sr-only">
              This section shows the time of sunrise for today.
            </span>
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Sunset</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Sunset: ${data.forecast?.forecastday[0]?.astro.sunset}`}
            >
              {data.forecast?.forecastday[0]?.astro.sunset}
            </h3>
            <span className="sr-only">
              This section shows the time of sunset for today.
            </span>
          </div>
        </div>

        <div
          className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backgroundImage: 'url("/bg/air.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-2xl">
            <h3>Air Pressure</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Air Pressure: ${data.current.pressure_mb} hPa`}
            >
              {data.current.pressure_mb} hPa
            </h3>
            <span className="sr-only">
              This section shows the current air pressure in hectopascals.
            </span>
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Feels Like</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Feels Like: ${data.current.feelslike_c}°`}
            >
              {data.current.feelslike_c}°
            </h3>
            <span className="sr-only">
              This section shows how the temperature feels like in Fahrenheit.
            </span>
          </div>
        </div>

        <div
          className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backgroundImage: 'url("/bg/visi.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-2xl">
            <h3>Visibility</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Visibility: ${data.current.vis_km} km`}
            >
              {data.current.vis_km} km
            </h3>
            <span className="sr-only">
              This section shows the current visibility in kilometers.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
