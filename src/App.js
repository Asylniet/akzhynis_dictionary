import { useRoutes } from "react-router-dom";
import Router from "./Routes/Router";
import './assets/scss/styles.scss';

const App = () => {
  const routing = useRoutes(Router);

  return routing;
};

export default App;
