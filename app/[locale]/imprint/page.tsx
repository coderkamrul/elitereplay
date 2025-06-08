import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center group">
            <ArrowLeft className="h-5 w-5 mr-3 group-hover:text-[#F5BE2D] transition-colors" />
            <Image
              src="/images/elitereplay-logo.png"
              alt="ÉliteReplay Logo"
              width={150}
              height={75}
              className="group-hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5BE2D]">Imprint</span>
            </h1>
            <p className="text-xl text-gray-400">Legal information and company details</p>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-[#F5BE2D] mb-6">Company Information</h2>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">ÉliteReplay Inc.</h3>
                  <p>
                    123 Innovation Drive
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>
                  <p>
                    <strong>Email:</strong> contact@elitereplay.com
                    <br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                    <br />
                    <strong>Website:</strong> www.elitereplay.com
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Legal Representatives</h3>
                  <p>
                    <strong>CEO:</strong> Oliver Schmidt
                    <br />
                    <strong>CTO:</strong> Dr. Sarah Johnson
                    <br />
                    <strong>Legal Counsel:</strong> Martinez & Associates LLP
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Registration Details</h3>
                  <p>
                    <strong>Company Registration:</strong> Delaware Corporation
                    <br />
                    <strong>Registration Number:</strong> 7891234
                    <br />
                    <strong>Tax ID:</strong> 12-3456789
                    <br />
                    <strong>Founded:</strong> 2024
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Responsible for Content</h3>
                  <p>
                    Oliver Schmidt
                    <br />
                    CEO, ÉliteReplay Inc.
                    <br />
                    123 Innovation Drive
                    <br />
                    San Francisco, CA 94105
                    <br />
                    Email: oliver@elitereplay.com
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Disclaimer</h3>
                  <p>
                    The information on this website is provided in good faith and for general information purposes only.
                    We do not make any warranties about the completeness, reliability, and accuracy of this information.
                    Any action you take upon the information on this website is strictly at your own risk, and we will
                    not be liable for any losses and damages in connection with the use of our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Copyright Notice</h3>
                  <p>
                    © {new Date().getFullYear()} ÉliteReplay Inc. All rights reserved. The content, design, graphics,
                    and other materials on this website are protected by copyright, trademark, and other intellectual
                    property laws. You may not reproduce, distribute, or create derivative works from any content on
                    this website without our express written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Third-Party Links</h3>
                  <p>
                    Our website may contain links to third-party websites. These links are provided for your convenience
                    only. We have no control over the content of these websites and accept no responsibility for them or
                    for any loss or damage that may arise from your use of them.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    <strong>Last updated:</strong> January 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}
