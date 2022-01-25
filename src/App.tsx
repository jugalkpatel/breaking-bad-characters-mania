import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

import { Home, Details } from "./pages";

function App() {
  console.log({ AppTheme });
  return (
    <BrowserRouter>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:name" element={<Details />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
