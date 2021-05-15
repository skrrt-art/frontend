import styled from 'styled-components';

import BackgroundGradientImage from './images/landing/background-gradient.jpg';
import UniswapLogoImage from './images/landing/uniswap-logo.png';
import SquirtleImage from './images/landing/squirtle.png';

export const App = () => {
  return (
    <Container>
      <Title>
        Skrrt Foundation™<br />
        Blockchain <TitleSegment>for Fun,</TitleSegment><br />
        Blockchain <TitleSegment>for All.</TitleSegment>
      </Title>
      <SquirtleContainer>
        <Squirtle />
        <SquirtleShadow />
      </SquirtleContainer>
      <Title>
        Buy<br />
        Trade<br />
        <GradientText>SKRRT</GradientText> Token on<br />
        <UniswapLogo />
      </Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: #eee;
  width: 100%;
  min-height: 100vh;
  background-image: url(${BackgroundGradientImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: 100px 16px 36px;
  font-weight: 800;
  font-size: 82px;
  line-height: 1;
  letter-spacing: -0.025em;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 64px;
  }

  @media (max-width: 700px) {
    font-size: 3.2rem;
  }

  @media (max-width: 600px) {
    font-size: 2.8rem;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 500px) {
    font-size: 2.4rem;
  }
`;
const TitleSegment = styled.span`
  display: inline-block;
`;

const SquirtleContainer = styled.div`
  width: 256px;
  height: 256px;
  position: relative;
`;
const Squirtle = styled.img.attrs({
  src: SquirtleImage,
})`
  width: 256px;
  height: 256px;
  filter: saturate(128%);
  border-radius: 48px;
  z-index: 9;
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 8px solid rgba(255, 255, 255, 0.2);
`;
const SquirtleShadow = styled.img.attrs({
  src: SquirtleImage,
})`
  position: absolute;
  width: 312px;
  height: 312px;
  top: -28px;
  left: -28px;
  right: -28px;
  bottom: -28px;
  filter: saturate(128%) blur(24px);
  border-radius: 48px;
  opacity: 0.8;
`;

const GradientText = styled.span`
  background: -webkit-linear-gradient(-64deg, #80E4F1, #957AF1);
  background-clip: text;
  filter: saturate(140%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const UniswapLogo = styled.img.attrs({
  src: UniswapLogoImage,
})`
  width: 80%;
`;
