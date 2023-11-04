import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  max-width: calc(100vw - 48px);
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;

  margin-left: auto;
  margin-right: auto;
`;
