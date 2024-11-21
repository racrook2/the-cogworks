'use client';

import StyleToggle from '@/app/components/StyleToggle';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

export default function Client({ defaultTheme = 'light', children }) {
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
    const newMode = mode === 'light' ? 'dark' : 'light';

    setMode(newMode);
    setCookie('theme', newMode, { sameSite: true });
  }

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyleToggle onClick={setStyle} checked={mode === 'dark'} />
        {children}
      </ThemeProvider>
    </CookiesProvider>
  );
}
