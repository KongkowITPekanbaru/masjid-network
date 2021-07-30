import { AppProps } from 'next/app'
import ThemeWrapper from "../design-system/theme-wrapper";

export default function App({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <ThemeWrapper>
            <Component {...pageProps} />
        </ThemeWrapper>
    );
}