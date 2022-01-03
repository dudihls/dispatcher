import { Home } from "./pages/Home";
type RouteProps = {
  path: string;
  element: JSX.Element;
};

export const routes: RouteProps[] = [
  {
    path: "/",
    element: <Home />,
  },
];
