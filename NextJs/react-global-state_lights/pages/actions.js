import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lights,
  toggleLight,
  allLightsOn,
  allLightsOff,
}) {
  function toggleLightAll(isOn) {
    lights.forEach((light) => {
      if (light.isOn !== isOn) {
        toggleLight(light.id);
      }
    });
  }

  function toggleAllLightsOn() {
    const allLightsOn = lights.every((light) => light.isOn);
    if (!allLightsOn) {
      toggleLightAll(true);
    }
  }

  function toggleAllLightsOff() {
    const allLightsOff = lights.every((light) => !light.isOn);
    if (!allLightsOff) {
      toggleLightAll(false);
    }
  }

  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        toggleAllLightsOn={toggleAllLightsOn}
        toggleAllLightsOff={toggleAllLightsOff}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
      />
    </>
  );
}
