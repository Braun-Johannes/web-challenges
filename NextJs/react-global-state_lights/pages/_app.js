import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { name: "Living Room", isOn: false, id: uid() },
    { name: "Kitchen", isOn: false, id: uid() },
    { name: "Bedroom", isOn: false, id: uid() },
    { name: "Bathroom", isOn: false, id: uid() },
    { name: "Garage", isOn: false, id: uid() },
    { name: "Porch", isOn: false, id: uid() },
    { name: "Garden", isOn: false, id: uid() },
    { name: "Office", isOn: false, id: uid() },
  ]);

  function toggleLight(id) {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  const allLightsOn = lights.every((light) => light.isOn);
  const allLightsOff = lights.every((light) => !light.isOn);

  return (
    <Layout isDimmed={allLightsOff}>
      <GlobalStyle />
      <Component
        {...pageProps}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
        lights={lights}
        toggleLight={toggleLight}
      />
    </Layout>
  );
}
