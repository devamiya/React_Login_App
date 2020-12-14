import './App.css';
import Login from "./Components/Login"
import Dashboard from './Components/Dashboard';
import store from "./Store/store";
import {Provider} from "react-redux";
import { useSelector} from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  // const dispatch = useDispatch();
  
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/Dashboard">
              <Dashboard />
            </PrivateRoute>
          
        </Switch>
      </Router>
    </div>
    </Provider>
    
  );
}


function PrivateRoute({ children, ...rest }) {
  
  const  isAuthenticated = useSelector(state=> state.users.isAuthenticated);
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default App;
