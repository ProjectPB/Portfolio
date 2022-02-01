import { css } from "styled-components";

export const color = {
  secondary: "#16A085",
  primary: "#45AA76",
  analogous: "#F4D03F",

  react: "#61DAFB",
  darkBlue: "#000072",
  red: "#cc0000",
  purple: "#cc00cc",

  backgroundLight: "#fafafa",
  backgroundMedium: "#d3d3d3",
  backgroundDark: "#f2f2f2",

  textLight: "#303030",

  linkedin: "#0e76a8",
  github: "#333",
  google: "#db4a39",
};

export const font_size = {
  custom: (size) => `font-size: ${size}px;`,
  xsmall: "font-size: 12px;",
  small: "font-size: 16px;",
  medium: "font-size: 24px;",
  large: "font-size: 36px;",
  xlarge: "font-size: 48px;",
};

export const font_weight = {
  light: 'font-family: "Montserrat", sans-serif; font-weight: 300;',
  regular: 'font-family: "Montserrat", sans-serif; font-weight: 400;',
  medium: 'font-family: "Montserrat", sans-serif; font-weight: 600;',
  bold: 'font-family: "Montserrat", sans-serif; font-weight: 700;',
};

export const shadowBackground = css`
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;  
