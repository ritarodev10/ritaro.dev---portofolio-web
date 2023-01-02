import Layout from "./layouts/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import { Error404, Home } from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
