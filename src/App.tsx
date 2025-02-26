import "./App.css";
import { CustomNav, HomeMatt, ShopMatt, Login, Register } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountVerificationPage from "./pages/AccountVerification";
import RedirectIfLoggedIn from "./utils/redirector";

function App() {
  return (
    <Router>
      <CustomNav />
      <Routes>
        <Route path="/" element={<HomeMatt />} />
        <Route path="/shop" element={<ShopMatt />} />
        <Route
          path="/login"
          element={
            <RedirectIfLoggedIn>
              <Login />
            </RedirectIfLoggedIn>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectIfLoggedIn>
              <Register />
            </RedirectIfLoggedIn>
          }
        />
        <Route
          path="/accountverification"
          element={<AccountVerificationPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
