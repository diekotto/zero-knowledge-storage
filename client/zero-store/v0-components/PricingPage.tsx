import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { CheckCircle2, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Basic",
      description: "For personal use",
      price: isAnnual ? 4.99 : 5.99,
      features: [
        "10 GB secure storage",
        "End-to-end encryption",
        "File sharing",
        "24/7 support",
      ],
    },
    {
      name: "Pro",
      description: "For professionals",
      price: isAnnual ? 9.99 : 11.99,
      features: [
        "100 GB secure storage",
        "End-to-end encryption",
        "Advanced file sharing",
        "Version history",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      description: "For large teams",
      price: "Custom",
      features: [
        "Unlimited secure storage",
        "End-to-end encryption",
        "Advanced collaboration tools",
        "Admin console",
        "24/7 priority support",
        "Custom integration",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">ZeroStore</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-600 hover:text-orange-500">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Features</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Secure, private, and flexible plans for everyone
        </p>

        <div className="flex justify-center items-center mb-12">
          <span className={`mr-2 ${isAnnual ? 'text-gray-500' : 'font-semibold'}`}>Monthly</span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
          <span className={`ml-2 ${isAnnual ? 'font-semibold' : 'text-gray-500'}`}>Annual</span>
          <span className="ml-2 text-sm text-orange-500 font-medium">Save 20%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 1 ? "border-orange-500 shadow-lg" : ""}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">
                  {typeof plan.price === 'number' ? `$${plan.price.toFixed(2)}` : plan.price}
                  {typeof plan.price === 'number' && <span className="text-base font-normal text-gray-500">/{isAnnual ? 'year' : 'month'}</span>}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">All Plans Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Zero-Knowledge Encryption"
              description="Your data is encrypted on your device. We never see your unencrypted files or encryption keys."
            />
            <FeatureCard
              title="Cross-Platform Sync"
              description="Access your files from any device. Changes are synced securely across all your devices."
            />
            <FeatureCard
              title="Secure File Sharing"
              description="Share files and folders securely with end-to-end encryption. Control access with expiration dates and passwords."
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-4">Our team is here to answer your questions about our plans and features.</p>
          <Button variant="outline" className="bg-white">
            <HelpCircle className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-orange-500 mb-4 md:mb-0">ZeroStore</div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:text-orange-500">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-orange-500">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-orange-500">Contact</Link></li>
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

function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}