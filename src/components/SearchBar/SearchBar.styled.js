import styled from 'styled-components';

import { BiSearch } from 'react-icons/bi';

export const Searchbar = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;

  color: #fff;

  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;

  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 6px;

  border: 0;
  opacity: 0.5;
  outline: none;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;

export const IconSearch = styled(BiSearch)`
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;

  font: inherit;
  font-size: 20px;

  border: none;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
