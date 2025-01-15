import { RouterProvider ,createBrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./pages/Home";

const AppRoute = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {path: '/DoIt/home', element: <Home />}

]);

function App() {

  return <RouterProvider router={AppRoute} />;
}

export default App
