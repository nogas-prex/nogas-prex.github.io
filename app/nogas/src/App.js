import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import {NOGASTheme} from './Theme';
import Urls from './Urls';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={NOGASTheme}>
        <Urls />
      </ThemeProvider>
    </div>
  );
}

export default App;
