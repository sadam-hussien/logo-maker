import { appWithTranslation } from "next-i18next";

import { Provider } from "react-redux";

import { store } from "../store";

import SSRProvider from "react-bootstrap/SSRProvider";

// global css
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <Provider store={store}>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
