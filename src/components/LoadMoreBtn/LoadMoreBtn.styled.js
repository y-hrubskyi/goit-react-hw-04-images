import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  max-width: 180px;
  margin: 0 auto;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};

  font-family: inherit;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: ${p => p.theme.colors.white};

  background-color: ${p => p.theme.colors.accent};
  border: 0;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  transition: ${p => p.theme.transition('all')};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.active};
  }
`;
