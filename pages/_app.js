import '../styles/globals.css'
import { makeServer } from "../lib/mirage/index"
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../styles/theme";
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

function MyApp({ Component, pageProps }) {

  return(
      <ThemeProvider theme={theme}>
          <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
      )

}

export default MyApp
