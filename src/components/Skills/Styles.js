import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SkillsContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  background-color: #f2f2f2;
`;

const sliderStyles = css`
  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -30px;
  }

  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.3 !important;
  }

  @media (min-width: 400px) {
    .slick-prev:before,
    .slick-next:before {
      font-size: 30px !important;
    }
  }

  @media (max-width: 400px) {
    .slick-prev {
      left: -30px;
    }
  }
`;

export const SliderContainer = styled.div`
  margin: 30px auto;
  padding: 0 50px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 600px) {
    margin: 15px auto;
    padding: 0 50px;
  }

  @media (max-width: 400px) {
    padding: 0 35px;
  }
`;

export const SkillsWrapper = styled(Slider)`
  cursor: grab;
  display: flex;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  padding: 40px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${sliderStyles}

  :active {
    cursor: grabbing;
  }

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

export const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SkillIcon = styled.img`
  height: 128px;
  object-fit: contain;
  margin: 0 auto;

  @media (max-width: 1200px) {
    height: 96px;
  }

  @media (max-width: 768px) {
    height: 72px;
  }

  @media (max-width: 600px) {
    height: 48px;
  }
`;

export const SkillNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 15px;

  @media (max-width: 600px) {
    margin-top: 5px;
    height: 30px;
  }
`;

export const SkillName = styled.h3`
  font-size: 18px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
