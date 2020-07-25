import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Goverage from "../components/preview/goverage";
import { dark } from "../common/theme/index";
import { GlobalStyles } from "../common/globalStyles";

const Home = () => {
  return (
    <ThemeProvider theme={dark}>
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
