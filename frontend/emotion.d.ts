import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    palette: {
        common: {
            black: string,
            white: string,
        },
        primary: {
            main: string,
            light: string,
            contrastText: string,
        },
        error: {
            main: string,
            light: string,
            contrastText: string,
        },
        grey: {
            100: string,
            200: string,
            300: string,
            400: string,
        },
    },
    shadows: {
        0: string,
        1: string,
        2: string,
    },
    typography: {
        fontFamily: string,
        customFontPath: string,
    };
  }
}
