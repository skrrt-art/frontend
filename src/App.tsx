import styled from 'styled-components';

import { Image } from './components/Image';
import { Footer } from './components/Footer';

import BackgroundGradientImage from './images/landing/background-gradient.jpg';
import UniswapLogoImage from './images/landing/uniswap-logo.png';
import SquirtleImage from './images/landing/squirtle.png';
import GitHubAppIcon from './images/landing/github-app-icon.png';
import InstagramAppIcon from './images/landing/instagram-app-icon.png';

export const App = () => {
  return (
    <Container>
      <Title>
        Skrrt Foundation™
        <br />
        Blockchain <TitleSegment>for Fun,</TitleSegment>
        <br />
        Finance <TitleSegment>for All.</TitleSegment>
      </Title>
      <Image src={SquirtleImage} />
      <Title>
        Buy
        <br />
        Trade
        <br />
        <GradientText>SKRRT</GradientText> Token on
        <br />
        <UniswapLogo />
        <br />
        Soon
      </Title>
      <Title>
        Keep up your
        <br />
        Interests here
      </Title>
      <SocialContainer>
        <a href="https://github.com/skrrt-art" target="_blank" rel="noreferrer">
          <Image src={GitHubAppIcon} />
        </a>
        <a
          href="https://instagram.com/skrrt.foundation"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={InstagramAppIcon} />
        </a>
      </SocialContainer>
      <Footer />
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

const GradientText = styled.span`
  background: -webkit-linear-gradient(-64deg, #80e4f1, #957af1);
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

const SocialContainer = styled.div`
  display: flex;
  padding-bottom: 100px;

  & > a {
    & > div {
      cursor: pointer;

      & > img.blurred-shadow {
        transition: all 0.2s ease-in-out;
        filter: saturate(128%) blur(96px);
        opacity: 0.9;
      }

      &:hover {
        & > img.blurred-shadow {
          filter: saturate(128%) blur(56px);
        }
      }
    }

    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;
