"use client";
import React, { useState } from "react";
import Current from "./components/Current";
import Input from "./components/Input";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const encodedLocation = encodeURIComponent(location);
  const url = `https://api.weatherapi.com/v1/forecast.json?key=7018ce9612064573bf8180457240512&q=${encodedLocation}&days=10&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="relative h-screen w-full text-white text-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="fixed inset-0 w-full h-full object-cover"
        >
          <source src="/background/ocean.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for content */}
        <div className="relative z-10 h-full mt-[5rem]">
          <h2 className="text-3xl lg:text-6xl font-extrabold mb-4 text-blue-600">
            Welcome to the Weather App
          </h2>
          <p className="text-xl">
            Enter a city name to get the weather forecast
          </p>

          {/* Grid of Beach Cities */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">
              Well Known Beach Cities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
              {/* Beach city 1 */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="beachcities/miami.jpg"
                  alt="Miami Beach"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h4 className="text-lg font-bold">Miami</h4>
                  <p className="text-sm">USA</p>
                </div>
              </div>

              {/* Beach city 2 */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="beachcities/sydney.jpg"
                  alt="Sydney Beach"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h4 className="text-lg font-bold">Sydney</h4>
                  <p className="text-sm">Australia</p>
                </div>
              </div>

              {/* Beach city 3 */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="beachcities/riodejeniro.jpg"
                  alt="Rio de Janeiro Beach"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h4 className="text-lg font-bold">Rio de Janeiro</h4>
                  <p className="text-sm">Brazil</p>
                </div>
              </div>

              {/* Beach city 4 */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="/beachcities/honolulu.jpg"
                  alt="Honolulu Beach"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h4 className="text-lg font-bold">Honolulu</h4>
                  <p className="text-sm">Hawaii</p>
                </div>
              </div>

              {/* Beach city 5 - Maldives */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="beachcities/maldive.jpg" // Replace with actual image URL
                  alt="Maldives Beach"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h4 className="text-lg font-bold">Maldives</h4>
                  <p className="text-sm">Malé, Maldives</p>
                </div>
              </div>

              {/* Beach city 6 - Camps Bay */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="beachcities/campsBay.jpg" // Replace with actual image URL
                  alt="Camps Bay Beach"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h4 className="text-lg font-bold">Camps Bay</h4>
                  <p className="text-sm">Cape Town, South Africa</p>
                </div>
              </div>

              {/* Beach city 7 - Cancún */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="beachcities/cancun.jpg" // Replace with actual image URL
                  alt="Cancún Beach"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h4 className="text-lg font-bold">Cancún</h4>
                  <p className="text-sm">Cancún, Mexico</p>
                </div>
              </div>

              {/* Beach city 8 - Santorini */}
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src="/beachcities/perissa.jpg" // Replace with actual image URL
                  alt="Santorini Beach"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h4 className="text-lg font-bold">Santorini</h4>
                  <p className="text-sm">Perissa, Greece</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark overlay for readability */}
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">City not found</h2>
        <p className="text-xl">Please enter a valid city name</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col lg:px-10 py-10 items-center justify-between mt-0 w-full ">
          <Current data={data} />
          <div className="z-10 w-full">
            <WeekForecast data={data} />
          </div>
        </div>
        <div className="z-10">
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-900 to-blue-800 h-fit">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit px-10 pt-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center z-10 bg-blue-50/70 py-1 px-2 rounded-lg ">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-blue-600 text-2xl py-2 px-4 rounded-xl italic font-bold ">
            <Image
              src={"/logoo.png"}
              alt="Balis Logo"
              width={150} // Adjust width as needed
              height={50} // Adjust height as needed
            />{" "}
          </h1>
        </div>
        {content}
      </div>

      <Footer />
    </div>
  );
}
