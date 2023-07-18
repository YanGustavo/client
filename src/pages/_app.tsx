import { AppProps } from 'next/app';
//import { SessionProvider, useSession } from 'next-auth/react';
//import { useRouter } from 'next/router';

import {usePathname} from 'next/navigation'
import { checkIsPublicRoute } from 'functions';
//import PrivateRoute from 'utils/PrivateRoute';

import { QueryClientProvider} from "@tanstack/react-query";
import { queryClient } from "services/queryClient";
import { Theme as ThemeLib } from 'lib/types/Theme';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyles from 'styles/styled-components/global';
import useTheme from 'hooks/useTheme';
import 'styles/tailwind/globals.css';
import ContextApp from "context";

import Loading from "components/Loading";
//Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
function App({ Component, pageProps: { ...pageProps }}: AppProps) {
const pathname = usePathname()
  const isPublicPage = checkIsPublicRoute(pathname!);
  const { theme, setNewStoreTheme } = useTheme();
  setNewStoreTheme();//Setar aqui o valor de  store caso tiver

  return (  
    //  <SessionProvider session={session}>
    <QueryClientProvider client = {queryClient}>
    <ThemeProvider theme={theme as DefaultTheme}>
    <ToastContainer />
    <ContextApp>
         {/* {isPublicPage && (<Component {...pageProps} />)}
        {!isPublicPage && <PrivateRoute>{<Component {...pageProps} />}</PrivateRoute>} */}
        
         {/* {Component.auth ? (
            <Auth adminOnly={Component.auth.adminOnly}>
              
           </Auth>
          ) : (
            <Component {...pageProps} />
          )} */}
          <Component {...pageProps} />
      </ContextApp>
      <GlobalStyles />
    </ThemeProvider>
    </QueryClientProvider>
    // </SessionProvider>
  );
}
// function Auth({ children, adminOnly }) {
//   const router = useRouter();
//   const { status, data: session } = useSession({
//     required: true,
//     onUnauthenticated() {
//       router.push('/login?message=login required');
//     },
//   });
//   if (status === 'loading') {
//     return <Loading/>;
//   }
//   if (adminOnly && !session.user.isAdmin) {
//     router.push('/login?message=admin login required');
//   }
//   return children;
// }

export default App;
