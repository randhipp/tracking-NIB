import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const app = (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
  return app;
}
export default MyApp;
