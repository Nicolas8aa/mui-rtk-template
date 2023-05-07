import "../styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import store from "../store";
import { ThemeContextProvider } from "../styles/theme/ThemeContext";
import Layout from "../components/layout/layout";
import createEmotionCache from "../utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({ Component, pageProps, ...props }: MyAppProps) {
  // If there's no emotionCache rendered by the server, use the clientSideEmotionCache
  const { emotionCache = clientSideEmotionCache } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeContextProvider>
        <Provider store={store}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeContextProvider>
    </CacheProvider>
  );
}
