import { css } from "styled-components";

export const color = {
  primary: "gold",
  secondary: "orangered",

  gold: "#eebc1d",
  blue: "#6600cc",
  darkBlue: "#000072",
  red: "#cc0000",
  purple: "#cc00cc",

  backgroundLight: "#fafafa",
  backgroundMedium: "#d3d3d3",
  backgroundDark: "#f2f2f2",

  textLight: "#8c8c8c",

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
  light: 'font-family: "Open Sans", sans-serif; font-weight: 300;',
  regular: 'font-family: "Open Sans", sans-serif; font-weight: 400;',
  medium: 'font-family: "Open Sans", sans-serif; font-weight: 600;',
  bold: 'font-family: "Open Sans", sans-serif; font-weight: 700;',
};

export const shadowBackground = css`
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;
