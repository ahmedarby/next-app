import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
    render = () => (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
                <meta name="theme-color" content="#fff" />
                <meta name="description" content="Simple app to learn NextJS" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}


export default MyDocument;
