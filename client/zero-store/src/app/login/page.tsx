"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Lock, Shield } from "lucide-react"
import Link from "next/link"
import { NavigationPublic } from "@/components/navigation.public"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login submitted", { email, password, rememberMe })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">ZeroStore</Link>
          <NavigationPublic />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Log In to Your Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember-me" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember-me" className="text-sm text-gray-600">Remember me</Label>
              </div>
            </div>
            <Button type="submit" className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Log In</Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="#" className="text-sm text-orange-500 hover:underline">Forgot your password?</Link>
          </div>
          <p className="text-center mt-4 text-sm text-gray-600">
            Don't have an account? <Link href="/register" className="text-orange-500 hover:underline">Sign up</Link>
          </p>
        </div>

        <div className="max-w-md mx-auto mt-8">
          <h2 className="text-xl font-semibold mb-4">Secure Login Process</h2>
          <ul className="space-y-4">
            <SecurityFeature 
              icon={<Lock className="w-6 h-6 text-orange-500" />}
              title="Zero-Knowledge Authentication"
              description="Your password is never sent to our servers. Instead, it's used to derive encryption keys on your device."
            />
            <SecurityFeature 
              icon={<Shield className="w-6 h-6 text-orange-500" />}
              title="End-to-End Encryption"
              description="All communication between your device and our servers is encrypted, ensuring your data remains private."
            />
            <SecurityFeature 
              icon={<AlertCircle className="w-6 h-6 text-orange-500" />}
              title="No Plain-Text Storage"
              description="We never store or have access to your plain-text password, maximizing the security of your account."
            />
          </ul>
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

function SecurityFeature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div className="ml-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  )
}
