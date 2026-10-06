import { Stack } from "@mui/material";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayerControlButton from "./PlayerControlButton";

const StyledSlider = styled(Slider)({
  height: 5,
  borderRadius: 0,
  padding: 0,
  color: "white",

  "& .MuiSlider-track": {
    border: "none",
  },

  "& .MuiSlider-thumb": {
    width: 12,
    height: 12,
  },

  "& .MuiSlider-rail": {
    opacity: 0.5,
  },
});

export default function VolumeControllers({
  value,
  handleVolume,
  handleVolumeToggle,
  muted,
}: {
  value: number;
  handleVolume: (
    event: Event,
    value: number | number[]
  ) => void;
  handleVolumeToggle: React.MouseEventHandler<HTMLButtonElement>;
  muted: boolean;
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
    >
      <PlayerControlButton onClick={handleVolumeToggle}>
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </PlayerControlButton>

      <StyledSlider
        value={muted ? 0 : value * 100}
        min={0}
        max={100}
        step={1}
        onChange={handleVolume}
        aria-label="Volume"
      />
    </Stack>
  );
}