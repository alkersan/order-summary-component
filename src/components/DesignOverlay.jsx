import React, { useEffect, useState } from "react";
import styled from "styled-components";
import desktopImg from "/docs/design/desktop-design.png";
import mobileImg from "/docs/design/mobile-design.png";
import { QUERIES } from "../constants.js";

const DesignOverlay = () => {
  const [showDesign, setShowDesign] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "d") {
      setShowDesign(!showDesign);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showDesign]);

  return (
    <>
      {showDesign && (
        <picture>
          <source srcSet={desktopImg} media={QUERIES.tabletAndUp} />
          <Overlay src={mobileImg} alt="" />
        </picture>
      )}
    </>
  );
};

const Overlay = styled.img`
  display: block;
  width: fit-content;
  position: absolute;
  inset: 0;
  margin: auto;
  filter: opacity(100%);
`;

export default DesignOverlay;
