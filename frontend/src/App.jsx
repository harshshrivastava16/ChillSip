import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import TrackOrderPage from './pages/TrackOrderPage';
import UserAccountPage from './pages/UserAccountPage';
import ManageSubscriptionPage from './pages/ManageSubscriptionPage';
import ManagePaymentMethodsPage from './pages/ManagePaymentMethodsPage';
import NotificationSettingsPage from './pages/NotificationSettingsPage';
import HelpCenterPage from './pages/HelpCenterPage';
import SpecialOffersPage from './pages/SpecialOffersPage';
import StoreLocatorPage from './pages/StoreLocatorPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a minimum loading time of 3-4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds total loading time

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#f8fbfa]">
          {isLoading && (
            <LoadingScreen onComplete={handleLoadingComplete} />
          )}
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/cart" element={<ShoppingCartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
              <Route path="/track-order" element={<TrackOrderPage />} />
              <Route path="/account" element={<UserAccountPage />} />
              <Route path="/subscription" element={<ManageSubscriptionPage />} />
              <Route path="/payment-methods" element={<ManagePaymentMethodsPage />} />
              <Route path="/notifications" element={<NotificationSettingsPage />} />
              <Route path="/help" element={<HelpCenterPage />} />
              <Route path="/offers" element={<SpecialOffersPage />} />
              <Route path="/store-locator" element={<StoreLocatorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
