import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./Form/FormPage";
import PaymentSuccess from "./Components/Checkout/Succcess";
import PaymentInvalid from "./Components/Checkout/Invalid";
import PaymentReversed from "./Components/Checkout/Reversed";
import PaymentFailed from "./Components/Checkout/PaymentFailed";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/callback" element={<ProductPage />} />
          <Route
            path="/success/:orderTrackingId"
            element={<PaymentSuccess />}
          />
          <Route path="/failed/:orderTrackingId" element={<PaymentFailed />} />
          <Route
            path="/invalid/:orderTrackingId"
            element={<PaymentInvalid />}
          />
          <Route
            path="/reversed/:orderTrackingId"
            element={<PaymentReversed />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
