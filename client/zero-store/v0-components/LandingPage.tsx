import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShieldCheck, Lock, Key, RefreshCw } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">ZeroStore</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-orange-500">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-orange-500">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Pricing</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure Your Data with Zero-Knowledge Storage</h1>
            <p className="text-xl mb-8">Store your files with unparalleled privacy and security</p>
            <Button className="bg-white text-orange-500 hover:bg-gray-100">Get Started</Button>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose ZeroStore?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ShieldCheck className="w-12 h-12 text-orange-500" />}
                title="Zero-Knowledge Encryption"
                description="Your data is encrypted before it leaves your device. We can't access your files, ever."
              />
              <FeatureCard
                icon={<Lock className="w-12 h-12 text-orange-500" />}
                title="End-to-End Security"
                description="Your files are protected from the moment they leave your device until they reach their destination."
              />
              <FeatureCard
                icon={<Key className="w-12 h-12 text-orange-500" />}
                title="You Hold the Keys"
                description="Only you have the encryption keys. Not even we can access your data without your permission."
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              <Step number={1} title="Encrypt" description="Your files are encrypted on your device before upload" />
              <RefreshCw className="w-8 h-8 text-orange-500 hidden md:block" />
              <Step number={2} title="Upload" description="Encrypted data is securely transferred to our servers" />
              <RefreshCw className="w-8 h-8 text-orange-500 hidden md:block" />
              <Step number={3} title="Store" description="Your encrypted files are stored safely on our secure servers" />
            </div>
          </div>
        </section>

        <section className="bg-orange-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Data?</h2>
            <p className="text-xl mb-8">Join thousands of users who trust ZeroStore with their sensitive information</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Input className="bg-white text-gray-800 w-full md:w-64" placeholder="Enter your email" />
              <Button className="bg-gray-800 text-white hover:bg-gray-700 w-full md:w-auto">Get Started</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-orange-500 mb-4 md:mb-0">ZeroStore</div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-4 text-center text-gray-400">
            © 2023 ZeroStore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Step({ number, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-64">
      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}