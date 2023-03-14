import { AppProps } from 'next/app';
//import { SessionProvider, useSession } from 'next-auth/react';
//import { useRouter } from 'next/router';

import { QueryClientProvider} from "@tanstack/react-query";
import { queryClient } from "services/queryClient";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/styled-components/global';
import theme from 'styles/styled-components/theme';
import 'styles/tailwind/globals.css';

import {BaseContextProvider} from "context/base-context";

function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (  
    <QueryClientProvider client = {queryClient}>
    <ThemeProvider theme={theme}>    
    <BaseContextProvider>
      <Component {...pageProps} />
      </BaseContextProvider> 
      <GlobalStyles />
    </ThemeProvider>
    </QueryClientProvider>
  );
}


export default App;
