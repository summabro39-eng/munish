import { useState } from 'react';
import { X, MessageCircle, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface CheckoutModalProps {
  onClose: () => void;
}

export default function CheckoutModal({ onClose }: CheckoutModalProps) {
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'info' | 'payment'>('info');

  const handleContinue = () => {
    if (customerName.trim() && customerPhone.trim()) {
      setStep('payment');
    }
  };

  const handleWhatsAppOrder = async () => {
    if (!customerName.trim() || !customerPhone.trim()) return;

    setLoading(true);
    try {
      const orderData = {
        user_id: user?.id || null,
        customer_name: customerName,
        customer_phone: customerPhone,
        items: cart,
        total_amount: getCartTotal(),
        payment_method: 'whatsapp',
        status: 'pending',
      };

      const { error } = await supabase.from('orders').insert([orderData]);

      if (error) throw error;

      const message = `*New Order from Munishwaraa Electricals*\n\nCustomer: ${customerName}\nPhone: ${customerPhone}\n\nItems:\n${cart
        .map((item) => `• ${item.product.name} x ${item.quantity} - ₹${item.product.price * item.quantity}`)
        .join('\n')}\n\n*Total: ₹${getCartTotal()}*`;

      const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      clearCart();
      onClose();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOnlinePayment = async () => {
    if (!customerName.trim() || !customerPhone.trim()) return;

    setLoading(true);
    try {
      const orderData = {
        user_id: user?.id || null,
        customer_name: customerName,
        customer_phone: customerPhone,
        items: cart,
        total_amount: getCartTotal(),
        payment_method: 'online',
        status: 'pending',
      };

      const { error } = await supabase.from('orders').insert([orderData]);

      if (error) throw error;

      alert('Online payment integration coming soon! Your order has been saved.');
      clearCart();
      onClose();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">Checkout</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} className="text-black" />
          </button>
        </div>

        <div className="p-6">
          {step === 'info' && (
            <>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-lg font-bold text-black mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-lg font-bold text-black mb-2">Order Summary</p>
                <div className="space-y-1 mb-3">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-base">
                      <span className="text-gray-600">
                        {item.product.name} x {item.quantity}
                      </span>
                      <span className="text-black font-bold">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-300 pt-3 flex justify-between">
                  <span className="text-xl font-bold text-black">Total:</span>
                  <span className="text-xl font-bold text-black">
                    ₹{getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleContinue}
                disabled={!customerName.trim() || !customerPhone.trim()}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-bold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                Continue to Payment
              </button>
            </>
          )}

          {step === 'payment' && (
            <>
              <div className="mb-6">
                <p className="text-lg text-gray-600 mb-1">Name: {customerName}</p>
                <p className="text-lg text-gray-600 mb-4">Phone: {customerPhone}</p>
                <p className="text-2xl font-bold text-black">
                  Total: ₹{getCartTotal().toFixed(2)}
                </p>
              </div>

              <p className="text-lg font-bold text-black mb-4">Choose Payment Method:</p>

              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={loading}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 text-lg transition-colors"
                >
                  <MessageCircle size={24} />
                  <span>Order on WhatsApp</span>
                </button>

                <button
                  onClick={handleOnlinePayment}
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 text-lg transition-colors"
                >
                  <CreditCard size={24} />
                  <span>Pay Online</span>
                </button>

                <button
                  onClick={() => setStep('info')}
                  disabled={loading}
                  className="w-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                >
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
