import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import MyOrdersPage from './pages/MyOrdersPage';
import { TermsPage, RefundPage, AboutPage, PrivacyPage, ContactPage } from './pages/LegalPages';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'search' | 'cart' | 'orders' | 'terms' | 'refund' | 'about' | 'privacy' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showMenu, setShowMenu] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setShowMenu(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'search':
        return <SearchPage />;
      case 'cart':
        return <CartPage />;
      case 'orders':
        return <MyOrdersPage />;
      case 'terms':
        return <TermsPage />;
      case 'refund':
        return <RefundPage />;
      case 'about':
        return <AboutPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="relative">
          <Layout
            currentPage={currentPage === 'home' || currentPage === 'search' || currentPage === 'cart' || currentPage === 'orders' ? currentPage : 'home'}
            onNavigate={handleNavigate}
          >
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="fixed top-4 right-4 z-30 bg-white border-2 border-gray-200 p-2 rounded-lg hover:border-yellow-400"
            >
              {showMenu ? <X size={24} /> : <Menu size={24} />}
            </button>

            {showMenu && (
              <div className="fixed top-20 right-4 z-30 bg-white border-2 border-gray-200 rounded-lg shadow-lg w-64">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black mb-3">Legal & Info</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleNavigate('terms')}
                      className="w-full text-left px-4 py-2 text-base hover:bg-gray-100 rounded-lg text-black"
                    >
                      Terms & Conditions
                    </button>
                    <button
                      onClick={() => handleNavigate('refund')}
                      className="w-full text-left px-4 py-2 text-base hover:bg-gray-100 rounded-lg text-black"
                    >
                      Refund Policy
                    </button>
                    <button
                      onClick={() => handleNavigate('about')}
                      className="w-full text-left px-4 py-2 text-base hover:bg-gray-100 rounded-lg text-black"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => handleNavigate('privacy')}
                      className="w-full text-left px-4 py-2 text-base hover:bg-gray-100 rounded-lg text-black"
                    >
                      Privacy Policy
                    </button>
                    <button
                      onClick={() => handleNavigate('contact')}
                      className="w-full text-left px-4 py-2 text-base hover:bg-gray-100 rounded-lg text-black"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            )}

            {renderPage()}

            <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">M</span>
                    </div>
                    <h3 className="text-xl font-bold text-black">Munishwaraa Electricals</h3>
                  </div>
                  <p className="text-base text-gray-600 mb-4">
                    Your trusted partner for quality electrical products
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <button onClick={() => handleNavigate('terms')} className="text-gray-600 hover:text-black">
                      Terms
                    </button>
                    <span className="text-gray-300">|</span>
                    <button onClick={() => handleNavigate('refund')} className="text-gray-600 hover:text-black">
                      Refund
                    </button>
                    <span className="text-gray-300">|</span>
                    <button onClick={() => handleNavigate('about')} className="text-gray-600 hover:text-black">
                      About
                    </button>
                    <span className="text-gray-300">|</span>
                    <button onClick={() => handleNavigate('privacy')} className="text-gray-600 hover:text-black">
                      Privacy
                    </button>
                    <span className="text-gray-300">|</span>
                    <button onClick={() => handleNavigate('contact')} className="text-gray-600 hover:text-black">
                      Contact
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    © 2024 Munishwaraa Electricals. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </Layout>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
