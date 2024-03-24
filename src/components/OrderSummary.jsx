import React from "react";
import styled from "styled-components";
import { QUERIES } from "../constants.js";

const OrderSummary = () => {
  return (
    <Wrapper>
      <Hero alt="" src="illustration-hero.svg" />
      <Content>
        <Heading>Order Summary</Heading>
        <Description>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </Description>
        <Plan>
          <img alt="" src="icon-music.svg" width="48" height="48" />
          <div>
            <h1>Annual Plan</h1>
            <p>$59.99/year</p>
          </div>
          <Change>Change</Change>
        </Plan>
        <Submit>Proceed to Payment</Submit>
        <Cancel>Cancel Order</Cancel>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  max-width: 327px;

  overflow: clip;
  border-radius: 20px;
  background-color: var(--color-white);

  box-shadow: 0 40px 40px -20px var(--color-shadow);

  @media ${QUERIES.tabletAndUp} {
    max-width: 450px;
  }
`;

const Hero = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 45 / 22;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 32px 24px;
  text-align: center;
  font-size: ${15 / 16}rem;
  font-weight: var(--font-regular);
  color: var(--color-neutral-light);

  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndUp} {
    padding: 45px 48px 48px 48px;
  }
`;

const Heading = styled.div`
  margin-top: 2px;
  font-size: ${22 / 16}rem;
  color: var(--color-neutral-dark);
  font-weight: var(--font-black);

  @media ${QUERIES.tabletAndUp} {
    font-size: ${28 / 16}rem;
  }
`;

const Description = styled.p`
  margin-top: 18px;
  margin-inline: 8px;
  line-height: 165%;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1rem;
    margin-top: 19px;
  }
`;

const Plan = styled.section`
  margin-top: 24px;
  background-color: var(--color-neutral-pale);
  padding: 16px;
  border-radius: 11px;

  display: flex;
  align-items: center;
  gap: 20px;

  @media ${QUERIES.tabletAndUp} {
    padding: 25px 24px;
    margin-top: 18px;
  }

  div {
    flex: 1;
    text-align: start;
    font-size: ${14 / 16}rem;

    @media ${QUERIES.tabletAndUp} {
      font-size: 1rem;
    }

    h1 {
      font-weight: var(--font-black);
      color: var(--color-neutral-dark);
      margin-bottom: 5px;
      white-space: nowrap;

      @media ${QUERIES.tabletAndUp} {
        margin-bottom: 8px;
      }
    }
  }
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;

const Change = styled(Button)`
  color: var(--color-primary-bright);
  font-size: ${13 / 16}rem;
  font-weight: var(--font-black);

  &:hover {
    color: var(--color-active);
  }

  @media ${QUERIES.tabletAndUp} {
    font-size: ${14 / 16}rem;
  }
`;

const Submit = styled(Button)`
  margin-top: 24px;

  border-radius: 12px;
  padding-block: 16px;
  color: var(--color-white);
  font-size: ${15 / 16}rem;
  font-weight: var(--font-black);
  background-color: var(--color-primary-bright);
  box-shadow: 0 20px 20px var(--color-primary-bright-a20);

  &:hover {
    background-color: var(--color-active);
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: 32px;
  }
`;

const Cancel = styled(Button)`
  margin-top: 24px;
  color: var(--color-neutral-light);
  font-size: ${15 / 16}rem;
  font-weight: var(--font-black);

  &:hover {
    color: var(--color-neutral-dark);
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: 32px;
  }
`;

export default OrderSummary;
