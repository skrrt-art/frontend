import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  src?: string;
};

export const Image: React.FC<Props> = ({ className, src }) => (
  <Container className={className}>
    <Cover src={src} />
    <Shadow className="blurred-shadow" src={src} />
  </Container>
);

const Container = styled.div`
  width: 256px;
  height: 256px;
  position: relative;
`;

const Cover = styled.img`
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

const Shadow = styled.img`
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
