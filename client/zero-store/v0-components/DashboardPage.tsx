import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { File, Folder, MoreVertical, Upload, Lock, Shield, Download, Trash2, Share2 } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [files, setFiles] = useState([
    { id: 1, name: "Important Document.pdf", size: "2.5 MB", modified: "2023-06-15", type: "file" },
    { id: 2, name: "Project Folder", size: "15 MB", modified: "2023-06-14", type: "folder" },
    { id: 3, name: "Encrypted Image.jpg", size: "4.2 MB", modified: "2023-06-13", type: "file" },
  ])

  const [storageUsed, setStorageUsed] = useState(21.7)
  const [totalStorage, setTotalStorage] = useState(100)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    console.log("File uploaded", e.target.files)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">ZeroStore</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Files</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Shared</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Settings</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Files</h1>
          <div className="flex space-x-4">
            <Input type="file" id="file-upload" className="hidden" onChange={handleFileUpload} />
            <Label htmlFor="file-upload" className="cursor-pointer">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Upload className="w-4 h-4 mr-2" />
                Upload File
              </Button>
            </Label>
            <Button variant="outline">
              <Folder className="w-4 h-4 mr-2" />
              New Folder
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Storage</h2>
            <Button variant="outline" size="sm">Upgrade</Button>
          </div>
          <Progress value={(storageUsed / totalStorage) * 100} className="mb-2" />
          <p className="text-sm text-gray-600">
            {storageUsed.toFixed(1)} GB of {totalStorage} GB used
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Modified</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file) => (
                <TableRow key={file.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      {file.type === "folder" ? (
                        <Folder className="w-5 h-5 mr-2 text-orange-500" />
                      ) : (
                        <File className="w-5 h-5 mr-2 text-gray-500" />
                      )}
                      {file.name}
                    </div>
                  </TableCell>
                  <TableCell>{file.size}</TableCell>
                  <TableCell>{file.modified}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" />
                          <span>Share</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Zero-Knowledge Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SecurityFeature 
              icon={<Lock className="w-6 h-6 text-orange-500" />}
              title="Client-Side Encryption"
              description="All files are encrypted on your device before upload. We never see your unencrypted data."
            />
            <SecurityFeature 
              icon={<Shield className="w-6 h-6 text-orange-500" />}
              title="End-to-End Protection"
              description="Your files remain encrypted during transfer and storage. Only you can decrypt and access your data."
            />
          </div>
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
    <div className="flex items-start bg-white p-4 rounded-lg shadow-md">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div className="ml-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}