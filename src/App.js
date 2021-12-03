/* eslint-disable react/jsx-no-comment-textnodes */
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes"

const Dashboard = lazy(() => import("./pages/dashboard"));
const notfound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <div className="App">
      <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          //New Pages 

          //End New Pages
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route component={notfound} />
        </Switch>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
