"use client"

import { NavigationPublic } from '@/components/navigation.public';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Lock, Share2, Smartphone, History, Users, Cloud, Zap } from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            ZeroStore
          </Link>
          <NavigationPublic />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">ZeroStore Features</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Discover the power of truly private and secure cloud storage
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Shield className="w-10 h-10 text-orange-500" />}
            title="Zero-Knowledge Encryption"
            description="Your data is encrypted on your device before it reaches our servers. We never see your unencrypted files or encryption keys."
          />
          <FeatureCard
            icon={<Lock className="w-10 h-10 text-orange-500" />}
            title="End-to-End Encryption"
            description="All your files remain encrypted during transfer and storage. Only you can decrypt and access your data."
          />
          <FeatureCard
            icon={<Share2 className="w-10 h-10 text-orange-500" />}
            title="Secure File Sharing"
            description="Share files and folders securely with end-to-end encryption. Control access with expiration dates and passwords."
          />
          <FeatureCard
            icon={<Smartphone className="w-10 h-10 text-orange-500" />}
            title="Cross-Platform Sync"
            description="Access your files from any device. Changes are synced securely across all your devices in real-time."
          />
          <FeatureCard
            icon={<History className="w-10 h-10 text-orange-500" />}
            title="Version History"
            description="Keep track of changes with file version history. Restore previous versions of your files at any time."
          />
          <FeatureCard
            icon={<Users className="w-10 h-10 text-orange-500" />}
            title="Collaborative Workspaces"
            description="Create secure shared spaces for team collaboration while maintaining zero-knowledge encryption."
          />
        </div>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Personal Use</TabsTrigger>
            <TabsTrigger value="business">Business Use</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>ZeroStore for Personal Use</CardTitle>
                <CardDescription>Secure your personal files with unparalleled privacy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Store sensitive documents, photos, and backups</p>
                <p>• Share files securely with family and friends</p>
                <p>• Access your data from any device, anywhere</p>
                <p>• Protect your digital life with zero-knowledge security</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle>ZeroStore for Business</CardTitle>
                <CardDescription>Empower your team with secure collaboration tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Secure document storage and sharing for teams</p>
                <p>• Collaborative workspaces with granular access controls</p>
                <p>• Audit logs and admin console for oversight</p>
                <p>• Compliance-friendly with zero-knowledge architecture</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">How ZeroStore Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              icon={<Cloud className="w-8 h-8 text-orange-500" />}
              title="1. Upload"
              description="Your files are encrypted on your device before being uploaded to our secure servers."
            />
            <ProcessCard
              icon={<Lock className="w-8 h-8 text-orange-500" />}
              title="2. Store"
              description="We store your encrypted files without any ability to access the contents."
            />
            <ProcessCard
              icon={<Zap className="w-8 h-8 text-orange-500" />}
              title="3. Access"
              description="Retrieve and decrypt your files instantly on any of your devices."
            />
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience true privacy?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust ZeroStore with their sensitive data.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Get Started for Free
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-orange-500 mb-4 md:mb-0">ZeroStore</div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-4 text-center text-gray-400">© 2023 ZeroStore. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function ProcessCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 p-3 bg-orange-100 rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
