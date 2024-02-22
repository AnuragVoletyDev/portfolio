import React from "react";
import Frame from "./outer/Frame";
import Antennae from "./outer/Antennae";
import InnerFrame from "./outer/InnerFrame";
import SpeakerGrill from "./outer/SpeakerGrill";
import Bezel from "./outer/Bezel";
import Screen from "./screen";
import Notch from "./outer/notch";
import PowerButton from "./outer/buttons/Power";
import VolumeUp from "./outer/buttons/VolumeUp";
import VolumeDown from "./outer/buttons/VolumeDown";
import Switch from "./outer/buttons/Switch";

const TextContent: React.FC = () => {
  return (
    <Frame>
      <Antennae />
      <Switch />
      <VolumeUp />
      <VolumeDown />
      <PowerButton />
      <InnerFrame>
        <SpeakerGrill />
        <Bezel>
          <Notch />
          <Screen />
        </Bezel>
      </InnerFrame>
    </Frame>
  );
};

export default TextContent;
