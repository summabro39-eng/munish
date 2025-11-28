import { useState, useEffect } from 'react';
import { Package, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase, Order } from '../lib/supabase';
import LoginForm from '../components/LoginForm';

export default function MyOrdersPage() {
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      loadOrders();
    }
  }, [user]);

  const loadOrders = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-black">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <LogIn size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">Login Required</h2>
          <p className="text-lg text-gray-600">Please login to view your orders</p>
        </div>
        <LoginForm onSuccess={loadOrders} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-black">Loading orders...</p>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <Package size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">No orders yet</h2>
          <p className="text-lg text-gray-500">Start shopping to see your orders here!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-black mb-6">My Orders</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border-2 border-gray-200 rounded-lg p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-lg font-bold text-black mb-1">
                  Order #{order.id.slice(0, 8).toUpperCase()}
                </p>
                <p className="text-base text-gray-600">
                  {new Date(order.created_at).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 font-bold rounded-lg">
                {order.status.toUpperCase()}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={item.product.image_url}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-black">{item.product.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity} × ₹{item.product.price}
                    </p>
                  </div>
                  <p className="text-base font-bold text-black">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <div>
                <p className="text-base text-gray-600">Payment Method</p>
                <p className="text-lg font-bold text-black capitalize">{order.payment_method}</p>
              </div>
              <div className="text-right">
                <p className="text-base text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold text-black">₹{order.total_amount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
