import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

import { AppProvider } from "./contexts";
import { Home, Details } from "./pages";
import { Characters, Favorites } from "./components";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyles />
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Characters />} />
              <Route path="favorites" element={<Favorites />} />
            </Route>
            <Route path="/character/:id" element={<Details />} />
          </Routes>
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
