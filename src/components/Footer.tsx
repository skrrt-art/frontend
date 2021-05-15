import styled from 'styled-components';

export const Footer = () => {
  return (
    <Container>
      <Copywhat>
        <strong>2021 Skrrt Foundation™</strong>
      </Copywhat>
    </Container>
  );
};

const Container = styled.footer`
  padding-bottom: 120px;
`;

const Copywhat = styled.span`
  font-size: 1.25rem;
  color: #957af1;
`;
