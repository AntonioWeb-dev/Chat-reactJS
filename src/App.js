import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { GlobalStyle } from "./config/GlobalStyle";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
