import { spacing } from './spacing';

export const layout = {
  breakpoints: {
    desktop: 'lg',
  },
  topBar: {
    height: `calc(3rem + ${spacing['safe-top']})`,
  },
  sideBar: {
    width: `calc(5.2rem + ${spacing['safe-left']})`,
  },
  internalBar: {
    height: '3rem',
  },
};
