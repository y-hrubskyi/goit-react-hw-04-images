import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  max-width: 180px;
  margin: 0 auto;
  padding: 8px 16px;

  font-family: inherit;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: #fff;

  background-color: #3f51b5;
  border: 0;
  border-radius: 2px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
