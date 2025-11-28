import { ReactNode } from 'react';
import { Home, Search, ShoppingCart, ClipboardList } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface LayoutProps {
  children: ReactNode;
  currentPage: 'home' | 'search' | 'cart' | 'orders';
  onNavigate: (page: 'home' | 'search' | 'cart' | 'orders') => void;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <h1 className="text-xl font-bold text-black">Munishwaraa Electricals</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-20">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-around">
          <button
            onClick={() => onNavigate('home')}
            className={`flex flex-col items-center gap-1 px-4 py-2 ${
              currentPage === 'home' ? 'text-black' : 'text-gray-400'
            }`}
          >
            <Home size={24} />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            onClick={() => onNavigate('search')}
            className={`flex flex-col items-center gap-1 px-4 py-2 ${
              currentPage === 'search' ? 'text-black' : 'text-gray-400'
            }`}
          >
            <Search size={24} />
            <span className="text-xs font-medium">Search</span>
          </button>

          <button
            onClick={() => onNavigate('cart')}
            className={`flex flex-col items-center gap-1 px-4 py-2 relative ${
              currentPage === 'cart' ? 'text-black' : 'text-gray-400'
            }`}
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute top-1 right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
            <span className="text-xs font-medium">Cart</span>
          </button>

          <button
            onClick={() => onNavigate('orders')}
            className={`flex flex-col items-center gap-1 px-4 py-2 ${
              currentPage === 'orders' ? 'text-black' : 'text-gray-400'
            }`}
          >
            <ClipboardList size={24} />
            <span className="text-xs font-medium">My Orders</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
