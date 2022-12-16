/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const sizeStyles = {
    small: {
      height: 8,
      padding: 0,
      borderRadius: 4,
    },
    medium: {
      height: 12,
      padding: 0,
      borderRadius: 4,
    },
    large: {
      height: 24,
      padding: 4,
      borderRadius: 8,
    },
  };

  const { height, padding, borderRadius } = sizeStyles[size];

  return (
    <BarContainer
      role="progressbar"
      aria-valuenow={value}
      style={{
        "--height": height + "px",
        "--padding": padding + "px",
        "--border-radius": borderRadius + "px",
      }}
    >
    <LargeWrapper>
      <Bar style={{ "--value": value + "%" }} />
    </LargeWrapper>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  background: ${COLORS.transparentGray15};
`;

const LargeWrapper = styled.div`
  /* Cropping bar iside to not stick out parent element */
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`

const Bar = styled.div`
  width: var(--value);
  height: 100%;
  background: ${COLORS.primary};
`;

export default ProgressBar;
