import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import MainLayout from '../Layout/Main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
}

export default MyApp
