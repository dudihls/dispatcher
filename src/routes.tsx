import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
type RouteProps = {
  path: string;
  element: JSX.Element;
};

export const routes: RouteProps[] = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
