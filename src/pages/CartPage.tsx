import { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from '../components/CheckoutModal';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">Your cart is empty</h2>
          <p className="text-lg text-gray-500">Add some products to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-black mb-6">Shopping Cart</h2>

        <div className="space-y-4 mb-6">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="bg-white border-2 border-gray-200 rounded-lg p-4 flex gap-4"
            >
              <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={item.product.image_url}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-black mb-1">{item.product.name}</h3>
                <p className="text-xl font-bold text-black mb-2">₹{item.product.price}</p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center"
                  >
                    <Minus size={16} className="text-black" />
                  </button>

                  <span className="text-lg font-bold text-black w-8 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center"
                  >
                    <Plus size={16} className="text-black" />
                  </button>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-auto p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Subtotal</p>
                <p className="text-xl font-bold text-black">
                  ₹{(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xl font-bold text-black">Total Amount:</span>
            <span className="text-3xl font-bold text-black">₹{getCartTotal().toFixed(2)}</span>
          </div>

          <button
            onClick={() => setShowCheckout(true)}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-lg text-xl transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
    </>
  );
}
