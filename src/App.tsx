import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Personal from "./Pages/Personal";
import Plan from "./Pages/Plan";
import Confirmation from "./Pages/Confirmation";
import AddOns from "./Pages/AddOns";
import Checkout from "./Pages/Checkout";
import AppLayout from "./UI/AppLayout";
import { useAppContext } from "./Contexts/AppContext";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const { setPath } = useAppContext();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname, setPath]);

  return (
    <div>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="personal" />} />
          <Route path="personal" element={<Personal />} />
          <Route path="plan" element={<Plan />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="add-on" element={<AddOns />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
