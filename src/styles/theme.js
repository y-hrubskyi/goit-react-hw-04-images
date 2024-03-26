export const theme = Object.freeze({
  colors: {
    white: '#fafafa',
    accent: '#3f51b5',
    active: '#303f9f',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  transition: (prop = '') => `${prop} 250ms cubic-bezier(0.4, 0, 0.2, 1);`,
  spacing: value => `${value * 4}px`,
});
