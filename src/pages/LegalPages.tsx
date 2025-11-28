import { FileText, ShieldCheck, Info, Lock, MapPin } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <FileText size={32} className="text-yellow-400" />
        <h1 className="text-3xl font-bold text-black">Terms & Conditions</h1>
      </div>

      <div className="space-y-6 text-lg text-black leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Munishwaraa Electricals website and services, you accept and agree to be bound by these terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">2. Products & Pricing</h2>
          <p>
            All product descriptions, images, and prices are subject to change without notice. We strive to display accurate information but cannot guarantee complete accuracy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">3. Orders & Payment</h2>
          <p>
            Orders can be placed through our website via WhatsApp or online payment. We reserve the right to refuse or cancel any order for any reason.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">4. Delivery</h2>
          <p>
            Delivery timelines are estimates only. We will make every effort to deliver products within the specified timeframe but cannot be held liable for delays.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">5. Liability</h2>
          <p>
            Munishwaraa Electricals shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.
          </p>
        </section>
      </div>
    </div>
  );
}

export function RefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck size={32} className="text-yellow-400" />
        <h1 className="text-3xl font-bold text-black">Refund Policy</h1>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-6">
        <p className="text-xl font-bold text-black">7 Days Easy Returns</p>
      </div>

      <div className="space-y-6 text-lg text-black leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-3">Return Eligibility</h2>
          <p className="mb-3">
            Products can be returned within 7 days of delivery if:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Product is unused and in original packaging</li>
            <li>All tags and labels are intact</li>
            <li>Product is not damaged or defective due to misuse</li>
            <li>Original invoice is provided</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Return</h2>
          <p className="mb-3">
            To initiate a return:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Contact us via WhatsApp or phone within 7 days</li>
            <li>Provide order details and reason for return</li>
            <li>Our team will arrange pickup or provide return instructions</li>
            <li>Refund will be processed within 5-7 business days after verification</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Non-Returnable Items</h2>
          <p>
            Certain products cannot be returned for hygiene and safety reasons. Please check product description before ordering.
          </p>
        </section>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Info size={32} className="text-yellow-400" />
        <h1 className="text-3xl font-bold text-black">About Us</h1>
      </div>

      <div className="space-y-6 text-lg text-black leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-3">Our Story</h2>
          <p>
            Munishwaraa Electricals has been serving the community for over a decade, providing quality electrical products and solutions. We started as a small local shop and have grown to become a trusted name in the electrical supplies industry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p>
            To provide high-quality electrical products at competitive prices while ensuring excellent customer service. We believe in building long-term relationships with our customers based on trust and reliability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Wide range of electrical products</li>
            <li>Genuine branded products only</li>
            <li>Competitive pricing</li>
            <li>Expert advice and consultation</li>
            <li>Fast delivery services</li>
            <li>After-sales support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Why Choose Us</h2>
          <p>
            With years of experience in the electrical industry, we understand the needs of our customers. Our team is committed to providing the best products and services to ensure complete satisfaction.
          </p>
        </section>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Lock size={32} className="text-yellow-400" />
        <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
      </div>

      <div className="space-y-6 text-lg text-black leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
          <p className="mb-3">
            We collect the following information when you use our services:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Name and contact details</li>
            <li>Phone number</li>
            <li>Delivery address</li>
            <li>Order history and preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How We Use Your Information</h2>
          <p className="mb-3">
            Your information is used to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Process and fulfill your orders</li>
            <li>Communicate about your orders and deliveries</li>
            <li>Improve our services and customer experience</li>
            <li>Send promotional offers (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Sharing of Information</h2>
          <p>
            We do not sell or rent your personal information to third parties. Information may be shared only with service providers necessary to fulfill orders and operate our business.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
          </p>
        </section>
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <MapPin size={32} className="text-yellow-400" />
        <h1 className="text-3xl font-bold text-black">Contact Us</h1>
      </div>

      <div className="space-y-6">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">Store Address</h2>
          <p className="text-xl text-black leading-relaxed">
            Munishwaraa Electricals<br />
            Shop No. 15, Main Market Road<br />
            Electronics Plaza, 2nd Floor<br />
            City Name - 400001<br />
            State, India
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">Phone Number</h2>
          <a href="tel:+919876543210" className="text-3xl font-bold text-yellow-600 hover:text-yellow-700">
            +91 98765 43210
          </a>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">Business Hours</h2>
          <div className="space-y-2 text-xl text-black">
            <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
            <p>Sunday: 10:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">Get Directions</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-lg text-gray-500">Map integration placeholder</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-3">Quick Support</h2>
          <p className="text-lg text-black mb-4">
            For immediate assistance, reach us on WhatsApp
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
