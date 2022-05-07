export const theme = {
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 172, 256, 512],
  fonts: {
    body: 'arizona-flare',
    mono: 'garton',
  },
  fontSizes: [12, 14, 16, 20, 28, 40, 48, 64, 80, 96, 128],
  letterSpacings: {
    body: '0.01em',
    mono: '0.07em',
    heading: '-0.015em',
    smallcaps: '0.07em',
  },
  fontWeights: {
    body: 400,
  },
  lineHeights: {
    body: 1.35,
  },
  colors: {
    text: '#ebebec',
    background: '#000000',
    primary: '#ebebec',
    secondary: '#808080',
    teal: '#4E9EB1',
    tan: '#D4B7A0',
    purple: '#8375B4'
  },
  layout: {
    container: {
      px: [4, 5, 7, 10],
    },
  },
  text: {
    paragraph: {
      fontSize: [3],
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
      my: ['1em'],
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
    },
    a: {
      color: 'text',
      '@media (hover: hover) and (pointer: fine)': {
        '&:active': {
          color: 'text',
        },
        '&:hover': {
          opacity: '0.6'
        },
      },
      transition: 'opacity 0.15s',
      textDecoration: 'none',
      borderBottom: ({colors}) => `solid 1px ${colors.primary}`,
      cursor: 'pointer',
    },
    p: {
      fontSize: [3, 3, 3, 4],
      lineHeight: 'body',
      fontFamily: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
      my: ['1em'],
    },
    h1: {
      fontSize: [6, 6, 7, 8],
      fontFamily: 'heading',
      letterSpacing: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h1',
      mt: [5, 7, 7],
      mb: [5, 6, 6],
    },
    h2: {
      fontSize: [5, 5, 5, 6],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h2',
      mt: [5, 6, 6],
      mb: [4, 5, 5],
    },
    h3: {
      fontSize: [4, 4, 4, 5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h3',
      mt: [4, 5, 5],
      mb: [3, 4, 4],
    },
    h4: {
      fontSize: [4, 4, 4, 5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h3',
      mt: [4, 5, 5],
      mb: [3, 4, 4],
    },
    h5: {
      fontSize: [4, 4, 4, 5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h3',
      mt: [4, 5, 5],
      mb: [3, 4, 4],
    },
    h6: {
      fontSize: [4, 4, 4, 5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h3',
      mt: [4, 5, 5],
      mb: [3, 4, 4],
    },
  },
  breakpoints: ['40em', '64em', '102em'],
  config: {
    initialColorModeName: 'dark',
    printColorModeName: 'dark',
    useColorSchemeMediaQuery: false,
  },
}