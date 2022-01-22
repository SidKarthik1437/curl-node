/* eslint-disable react/jsx-no-comment-textnodes */
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DataContext from "./context/Data";
import * as ROUTES from "./constants/routes";

const Dashboard = lazy(() => import("./pages/dashboard"));
const notfound = lazy(() => import("./pages/not-found"));

function App() {
  let data = [];
  return (
    <div className="App w-full h-screen overflow-hidden">
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            //New Pages //End New Pages
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={notfound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
