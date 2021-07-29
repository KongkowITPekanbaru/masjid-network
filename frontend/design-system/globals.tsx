import { Global, css, useTheme } from '@emotion/react';

const globalCSS = theme => css`
    @font-face {
        font-family: ${theme.typography.fontFamily};
        font-style: normal;
        font-weight: 700;
        src: local(''), 
        url('${theme.typography.customFontPath}') format('truetype');
    }

    * {
        box-sizing: border-box;
        font-family: ${theme.typography.fontFamily};
    }

    html,
    body {
        width: 100%;
        height: 100%;
        min-height: 100%;
        padding: 0;
        margin: 0;
    }
`;

export default function GlobalStyles(): JSX.Element {
    const theme = useTheme();
    return (
        <Global
            styles={globalCSS(theme)}
        />
    );
}