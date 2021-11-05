import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { UserProvider } from "./context/userContext";
import { GlobalStyle } from "./config/GlobalStyle";
import "./app.css";

function App() {
  return (
    <UserProvider>
      <BrowserRouter forceRefresh>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
