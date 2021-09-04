import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import AuthContextProvider from "./contexts/AuthContext";
import Auth from "./views/Auth";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/login"
            render={(props) => <Auth {...props} authRoute={"login"} />}
          />
          <Route
            exact
            path="/register"
            render={(props) => <Auth {...props} authRoute={"register"} />}
          />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
