import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  toggleAllLightsOn,
  toggleAllLightsOff,
  allLightsOn,
  allLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={toggleAllLightsOff}
        disabled={allLightsOff}
      >
        Turn all lights off
      </Button>
      <Button type="button" onClick={toggleAllLightsOn} disabled={allLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
