import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// local imports
import { Home } from "./pages";

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
