import "./App.css";
import { Route, Routes } from "react-router-dom";

import HeadBar from "./containers/HeadBar/HeadBar";
import Navbar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import TShirtsPage from "./pages/TShirtsPage/TShirtsPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFound from "./pages/NotFound/NotFound";
import ProductPage from "./pages/ProductPage/ProductPage";
import AccountPage from "./pages/AccountPage/AccountPage";

function App() {
  return (
    <div>
      <HeadBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/t-shirts" element={<TShirtsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/product/:name/:id" element={<ProductPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
