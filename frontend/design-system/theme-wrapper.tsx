import { ThemeProvider } from '@emotion/react';

import GlobalStyles from './globals';
import { theme } from './theme';

interface ThemeWrapperProps {
    children: JSX.Element;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}