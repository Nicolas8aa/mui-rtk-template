import "../styles/globals.css";

import { Fira_Sans, Nunito } from "next/font/google";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "../store";
import { ThemeContextProvider } from "../utils/ThemeContext";
import Layout from "../components/layout/layout";
import { CssBaseline } from "@mui/material";

const fira = Fira_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const nunito = Nunito({ weight: ["400"], subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <CssBaseline />
        <main className={`${fira.className} ${nunito.className}`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemeContextProvider>
    </Provider>
  );
}
