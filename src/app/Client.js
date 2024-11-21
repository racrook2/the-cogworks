'use client';

import StyleToggle from '@/app/components/StyleToggle';
import { sm, lg } from '@/app/styles/mediaQueries';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

const LIGHT = 'light';
const DARK = 'dark';

const boxStyle = {
  padding: '16px 160px',

  [sm]: {
    padding: '16px 8px'
  },

  [lg]: {
    padding: '16px'
  }
};

export default function Client({ defaultTheme = LIGHT, children }) {
  const [mode, setMode] = useState(defaultTheme);
  const [cookies, setCookie] = useCookies('theme');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  function setStyle() {
    const newMode = mode === LIGHT ? DARK : LIGHT;

    setMode(newMode);
    setCookie('theme', newMode, { sameSite: true });
  }

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={boxStyle}>
          <StyleToggle onClick={setStyle} checked={mode === DARK} />
          {children}
        </Box>
      </ThemeProvider>
    </CookiesProvider>
  );
}
