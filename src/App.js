import { ThemeProvider, createTheme } from "@mui/material/styles";
import MyAppBar from "./components/appbar";
import Home from "./view/Home";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8a4ddc',
      dark: '#703faf',
    },
    secondary: {
      main: '#8a4ddc',
    },
    info: {
      main: '#0288d1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyAppBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
