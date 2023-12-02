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
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(6)};

  color: ${p => p.theme.colors.white};

  background-color: ${p => p.theme.colors.accent};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 ${p => p.theme.spacing(2)};

  border: 0;
  opacity: 0.5;
  outline: none;

  transition: ${p => p.theme.transition('opacity')};

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
  padding-left: ${p => p.theme.spacing(1)};
  padding-right: ${p => p.theme.spacing(1)};

  font: inherit;
  font-size: 20px;

  border: none;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
