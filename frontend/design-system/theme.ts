import { spacing } from './units';

const white = '#fff';
const black = '#111';

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    main: '#1E6F5C',
    light: '#29BB89',
    contrastText: white,
  },
  error: {
    main: '#A51C30',
    light: '#A7333F',
    contrastText: white,
  },
  grey: {
    100: '#EAEAEA',
    200: '#C9C5C5',
    300: '#888',
    400: '#666',
  },
};

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)',
};

const typography = {
  fontFamily:
    "Poppins",
  customFontPath: "/fonts/Poppins-Regular.ttf",
};

const shape = {
  borderRadius: spacing['xxsmall'],
};

export const theme = {
  palette,
  shadows,
  typography,
  shape,
};
