// import { lazy, Suspense } from "react";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
type RouteProps = {
  path: string;
  element: JSX.Element;
};

// const Home = lazy(() =>
//   import("./pages/Home/Home").then(({ Home }) => ({ default: Home }))
// );
// <Suspense fallback={<div>Some Fancy Loader ...</div>}>
//   <Home />
// </Suspense>;

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
