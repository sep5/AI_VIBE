import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C8102E',
      light: '#E8394F',
      dark: '#9C0020',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1A1A1A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F0EBE3',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#6B5B52',
    },
    info: {
      main: '#4A6FA5',
      light: '#A8C4D8',
    },
    divider: '#DDD5CB',
  },
  typography: {
    fontFamily: "'Inter', 'Pretendard', 'Apple SD Gothic Neo', sans-serif",
    h1: { fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' },
    h2: { fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.35 },
    h3: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.35 },
    h4: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: '0.875rem', lineHeight: 1.6 },
    body2: { fontSize: '0.75rem', lineHeight: 1.5 },
    caption: { fontSize: '0.75rem', lineHeight: 1.5 },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          textTransform: 'none',
          fontWeight: 600,
          transition: 'background 0.2s ease',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
