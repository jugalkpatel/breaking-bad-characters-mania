import { ThemeProvider } from "styled-components";

import { AppTheme } from "./styles/theme";
import FontStyles from "./styles/fontStyles";

import { Home } from "./pages";

function App() {
  console.log({ AppTheme });
  return (
    <ThemeProvider theme={AppTheme}>
      <FontStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
