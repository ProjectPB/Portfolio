import React from "react";
import { Path, Svg, WavyBckContainer } from "./Styles";

const WavyBackground = () => {
  return (
    <WavyBckContainer>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <Path
          fill="#16A085"
          fill-opacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,138.7C1248,128,1344,64,1392,32L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></Path>
      </Svg>
    </WavyBckContainer>
  );
};

export default WavyBackground;
