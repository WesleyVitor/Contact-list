import type { AppProps } from "next/app";
import { CreateGlobalStyle } from "../styles/reset";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
                </style>
            </Head>
            <CreateGlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
