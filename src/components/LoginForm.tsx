import { useState } from 'react';
import { Smartphone } from 'lucide-react';

interface LoginFormProps {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!phoneNumber.trim()) return;

    setLoading(true);
    try {
      alert('OTP authentication will be implemented with Firebase Auth. For now, this is a placeholder.');

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Smartphone size={32} className="text-yellow-600" />
        </div>
        <h3 className="text-2xl font-bold text-black mb-2">Login with Mobile</h3>
        <p className="text-base text-gray-600">We'll send you an OTP to verify</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-lg font-bold text-black mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter 10 digit mobile number"
            maxLength={10}
            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
          />
        </div>

        <button
          onClick={handleSendOTP}
          disabled={phoneNumber.length !== 10 || loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-bold py-4 px-6 rounded-lg text-lg transition-colors"
        >
          {loading ? 'Sending...' : 'Send OTP'}
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By continuing, you agree to our Terms & Conditions
        </p>
      </div>
    </div>
  );
}
