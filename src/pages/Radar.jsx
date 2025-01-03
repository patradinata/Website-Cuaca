import React, { useState, useCallback, useRef, useEffect } from "react";
import LayerOptions from "../componenes/radarComponenst/LayerOptions";
import MapContainer from "../componenes/radarComponenst/MapContainer";
import LegendToggle from "../componenes/radarComponenst/LegendToggle";
import ControlsHelp from "../componenes/radarComponenst/ControlsHelp";
import TemperatureLegend from "../componenes/radarComponenst/TemperatureLegend";

const WeatherMap = () => {
  const [activeLayer, setActiveLayer] = useState("radar");
  const [showLayerOptions, setShowLayerOptions] = useState(false);
  const [showLegend, setShowLegend] = useState(false);
  const mapInstanceRef = useRef(null);

  const layers = {
    radar: {
      url: "https://tile.openweathermap.org/map/radar/{z}/{x}/{y}.png?appid=47917dcfe0883e9327ebdb6391ac051d",
      name: "Radar",
    },
    temp: {
      url: "https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=47917dcfe0883e9327ebdb6391ac051d",
      name: "Temperature",
    },
    clouds: {
      url: "https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=47917dcfe0883e9327ebdb6391ac051d",
      name: "Clouds",
    },
  };

  const handleLayerChange = useCallback((layer) => {
    setActiveLayer(layer);
    setShowLayerOptions(false);
  }, []);

  return (
    <div className="w-full md:h-auto h-screen p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg md:px-12 px-4 backdrop-blur-3xl pt-28 overflow-hidden">
      <h2 className="text-2xl font-bold text-white mb-2 text-center">Peta Cuaca Internasional</h2>
      <p className="text-white mb-4 text-center">Visualisasi cuaca real-time</p>

      <LayerOptions layers={layers} activeLayer={activeLayer} handleLayerChange={handleLayerChange} showLayerOptions={showLayerOptions} setShowLayerOptions={setShowLayerOptions} />

      <LegendToggle showLegend={showLegend} setShowLegend={setShowLegend} />

      <MapContainer activeLayer={activeLayer} layers={layers} mapInstanceRef={mapInstanceRef} />

      {/* Komponen TemperatureLegend */}
      <TemperatureLegend activeLayer={activeLayer} showLegend={showLegend} mapInstance={mapInstanceRef.current} />

      <ControlsHelp />

      <div className="md:mt-4 mt-20 text-sm text-white text-center">Data disediakan oleh OpenWeatherMap | Peta © OpenStreetMap contributors</div>
    </div>
  );
};

export default WeatherMap;
