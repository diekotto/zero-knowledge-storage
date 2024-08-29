import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2, Info } from "lucide-react"

export default function RegistrationPage() {
  const [password, setPassword] = useState("")
  const [passwordStrength, setPasswordStrength] = useState(0)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setPasswordStrength(calculatePasswordStrength(newPassword))
  }

  const calculatePasswordStrength = (password: string) => {
    // This is a simple password strength calculation. In a real-world scenario,
    // you'd want to use a more sophisticated algorithm.
    let strength = 0
    if (password.length > 6) strength += 20
    if (password.length > 10) strength += 20
    if (/[A-Z]/.test(password)) strength += 20
    if (/[0-9]/.test(password)) strength += 20
    if (/[^A-Za-z0-9]/.test(password)) strength += 20
    return strength
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">ZeroStore</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Pricing</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Create Your Account</h1>
          <form>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={handlePasswordChange}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
              </div>
              <div>
                <Label>Password Strength</Label>
                <Progress value={passwordStrength} className="mt-2" />
                <p className="text-sm text-gray-600 mt-1">
                  {passwordStrength < 40 && "Weak"}
                  {passwordStrength >= 40 && passwordStrength < 80 && "Medium"}
                  {passwordStrength >= 80 && "Strong"}
                </p>
              </div>
            </div>
            <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Create Account</Button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account? <a href="#" className="text-orange-500 hover:underline">Log in</a>
          </p>
        </div>

        <div className="max-w-md mx-auto mt-8">
          <h2 className="text-xl font-semibold mb-4">How We Protect Your Data</h2>
          <ul className="space-y-4">
            <SecurityFeature 
              icon={<AlertCircle className="w-6 h-6 text-orange-500" />}
              title="Zero-Knowledge Encryption"
              description="Your data is encrypted on your device before it reaches our servers. We never see your unencrypted data or your encryption keys."
            />
            <SecurityFeature 
              icon={<CheckCircle2 className="w-6 h-6 text-orange-500" />}
              title="End-to-End Security"
              description="Your files remain encrypted during transfer and storage. Only you can decrypt and access your data."
            />
            <SecurityFeature 
              icon={<Info className="w-6 h-6 text-orange-500" />}
              title="No Password Storage"
              description="We don't store your password. Instead, we use it to derive encryption keys on your device, ensuring maximum security."
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

function SecurityFeature({ icon, title, description }) {
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