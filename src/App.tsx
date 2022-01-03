import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App: React.FC = () => (
  <Routes>
    {routes.map(({ path, element }, idx) => (
      <Route path={path} element={element} key={idx} />
    ))}
  </Routes>
);

export default App;
