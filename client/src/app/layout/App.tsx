import { Container, CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import Header from "./Header";
import Catalog from "../../features/catalog/Catalog";
import { useState } from "react";

function App(){
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType ==='light' ? 'lightgrey' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
