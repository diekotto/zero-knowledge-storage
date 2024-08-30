import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NavigationPublic } from "@/components/navigation.public"
import { Shield, Code, Lightbulb, Rocket } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">ZeroStore</Link>
          <NavigationPublic />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About ZeroStore</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Pioneering zero-knowledge encryption for a more secure digital world
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At ZeroStore, we believe that privacy is a fundamental human right. Our mission is to empower individuals and organizations with the most secure and private cloud storage solution available. We're committed to revolutionizing data protection through zero-knowledge encryption, ensuring that your data remains yours and yours alone.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We envision a world where everyone can store and share their data with complete confidence, knowing that their privacy is guaranteed by mathematical certainty, not just by promises.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValueCard
              icon={<Shield className="w-12 h-12 text-orange-500" />}
              title="Privacy First"
              description="We believe your data is yours alone. Our zero-knowledge architecture ensures that not even we can access your files."
            />
            <ValueCard
              icon={<Code className="w-12 h-12 text-orange-500" />}
              title="Open Source"
              description="We're committed to transparency and community collaboration. Our core encryption libraries are open source and publicly auditable."
            />
            <ValueCard
              icon={<Lightbulb className="w-12 h-12 text-orange-500" />}
              title="Innovation"
              description="We're constantly pushing the boundaries of cryptography and cloud technology to provide cutting-edge security."
            />
            <ValueCard
              icon={<Rocket className="w-12 h-12 text-orange-500" />}
              title="Empowerment"
              description="We strive to empower our users with control over their digital lives through education and powerful tools."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              ZeroStore was founded in 2020 by a team of cryptography experts and privacy advocates. Frustrated by the lack of truly secure cloud storage options, we set out to create a solution that would set a new standard for data privacy.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our journey began with a simple idea: what if users could have the convenience of cloud storage without sacrificing their privacy? This led us to develop our proprietary zero-knowledge encryption system, which forms the backbone of ZeroStore.
            </p>
            <p className="text-lg text-gray-700">
              Today, ZeroStore is trusted by thousands of individuals and businesses worldwide. We're proud of how far we've come, but we're even more excited about the future. As we continue to grow and innovate, our commitment to your privacy remains unwavering.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Join Us in Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            We're always looking for talented individuals who share our passion for privacy and security. If you're interested in joining our team, check out our current openings.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            View Career Opportunities
          </Button>
        </section>
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

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center">
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
