import Header from "@/components/header/Header";
import "@/styles/globals.css";

import DataProvider from "@/context/DataProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DataProvider>
        <Header />
        <Component {...pageProps} />
      </DataProvider>
    </>
  );
}
