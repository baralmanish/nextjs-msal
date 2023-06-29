import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>My App</h1>
      <Component {...pageProps} />
    </>
  );
}
