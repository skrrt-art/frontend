import styled from 'styled-components';

export const Footer = () => {
  return (
    <Container>
      <Copywhat>
        <strong>2021 Skrrt Foundationâ„˘</strong>
      </Copywhat>
    </Container>
  );
};

const Container = styled.footer`
  padding-top: 100px;
  padding-bottom: 120px;
`;

const Copywhat = styled.span`
  font-size: 1.25rem;
  color: #957af1;
`;
