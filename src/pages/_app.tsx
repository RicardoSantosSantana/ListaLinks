import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'
import AuthProvider from '../components/context/AuthContext';

import { SessionProvider } from "next-auth/react";
import { useEffect } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);

  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={session}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SessionProvider>
    </>

  )
}
export default MyApp;