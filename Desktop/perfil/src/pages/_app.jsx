// import { useRouter } from 'next/router'
// import { type AppProps } from 'next/app'

import { GlobalStyle } from './globalStyles';

const MyApp = ({ Component, pageProps }) => {
  // const router = useRouter()

  // useEffect(() => {
  //   // Redirecionamento da página inicial para /layout
  //   void router.replace('/layout')
  // }, [router])

  // // Renderiza apenas um placeholder enquanto o redirecionamento está sendo processado
  // if (router.pathname !== '/layout') {
  //   return null
  // }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
