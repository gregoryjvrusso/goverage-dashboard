import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Goverage from "../components/preview/goverage";
import theme from "../common/theme";
import { GlobalStyles } from "../common/globalStyles";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Head>
          <title>Goverage</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GlobalStyles />
        <Goverage />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Home;
