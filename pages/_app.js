import '../styles/globals.css'
import { makeServer } from "../lib/mirage/index"
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../styles/theme";
import store from "../redux/state";
import {Provider} from "react-redux";
if (true) {
  makeServer()
}

function MyApp({ Component, pageProps }) {

  return(
      <ThemeProvider theme={theme}>
          <Provider store={store}>
          <CssBaseline/>
        <Component {...pageProps} />
          </Provider>
      </ThemeProvider>
      )

}

export default MyApp
