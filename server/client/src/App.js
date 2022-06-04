import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles"
import { theme } from "./styles/theme";
import Layout from "./components/common/Layout";
import Main from "./pages/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
