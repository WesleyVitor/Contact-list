import type { AppProps } from "next/app";
import { CreateGlobalStyle } from "../styles/reset";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <CreateGlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
