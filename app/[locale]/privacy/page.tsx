import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5BE2D]">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-400">How we collect, use, and protect your information</p>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-gray-300 leading-relaxed">
                <div>
                  <p className="text-sm text-gray-400 mb-6">
                    <strong>Effective Date:</strong> January 1, 2025
                    <br />
                    <strong>Last Updated:</strong> January 1, 2025
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">1. Introduction</h2>
                  <p>
                    Welcome to ÉliteReplay ("we," "our," or "us"). We are committed to protecting your privacy and
                    ensuring the security of your personal information. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you use our AI-powered sports highlight service,
                    including our website, mobile applications, and related services (collectively, the "Service").
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">2. Information We Collect</h2>

                  <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
                  <p className="mb-4">We may collect the following personal information:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Email addresses for video delivery and communication</li>
                    <li>Name and contact information when you contact us</li>
                    <li>Payment information for premium services (processed securely by third-party providers)</li>
                    <li>Account information if you create an account with us</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">2.2 Video and Image Data</h3>
                  <p className="mb-4">
                    Our service processes video recordings from sports facilities to create highlight reels. This may
                    include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Video footage of sports activities</li>
                    <li>Images extracted from video for AI analysis</li>
                    <li>Biometric data derived from movement analysis (anonymized)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">2.3 Technical Information</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Device information and identifiers</li>
                    <li>IP addresses and location data</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide and improve our AI-powered highlight generation service</li>
                    <li>Deliver personalized video content to your specified email address</li>
                    <li>Process payments and manage your account</li>
                    <li>Communicate with you about our services</li>
                    <li>Analyze usage patterns to improve our technology</li>
                    <li>Ensure security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">4. Data Processing and AI Technology</h2>
                  <p className="mb-4">
                    Our AI systems process video data locally on edge devices (NVIDIA Jetson Orin) installed at sports
                    facilities. This approach ensures:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Minimal data transmission over networks</li>
                    <li>Real-time processing without cloud dependency</li>
                    <li>Enhanced privacy through local processing</li>
                    <li>Automatic deletion of raw footage after highlight generation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">5. Data Sharing and Disclosure</h2>
                  <p className="mb-4">We may share your information in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>With your consent:</strong> When you explicitly agree to share your information
                    </li>
                    <li>
                      <strong>Service providers:</strong> Third-party vendors who assist in providing our services
                    </li>
                    <li>
                      <strong>Sports facilities:</strong> Partner facilities may receive aggregated, anonymized
                      analytics
                    </li>
                    <li>
                      <strong>Legal requirements:</strong> When required by law or to protect our rights
                    </li>
                    <li>
                      <strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">6. Data Security</h2>
                  <p>
                    We implement industry-standard security measures to protect your information, including: encryption
                    in transit and at rest, secure edge computing infrastructure, regular security audits, access
                    controls and authentication, and automatic data deletion policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">7. Data Retention</h2>
                  <p className="mb-4">We retain your information as follows:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Raw video footage:</strong> Deleted within 24 hours after processing
                    </li>
                    <li>
                      <strong>Highlight videos:</strong> Stored for 90 days unless you request longer retention
                    </li>
                    <li>
                      <strong>Personal information:</strong> Retained as long as necessary to provide services
                    </li>
                    <li>
                      <strong>Analytics data:</strong> Anonymized and retained for service improvement
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">8. Your Rights</h2>
                  <p className="mb-4">Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Portability of your data</li>
                    <li>Objection to processing</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                  <p className="mt-4">To exercise these rights, please contact us at privacy@elitereplay.com.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">9. International Data Transfers</h2>
                  <p>
                    Our services may involve transferring your information to countries outside your residence. We
                    ensure appropriate safeguards are in place to protect your information during such transfers, in
                    compliance with applicable data protection laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">10. Children's Privacy</h2>
                  <p>
                    Our services are not directed to children under 13 years of age. We do not knowingly collect
                    personal information from children under 13. If you believe we have collected information from a
                    child under 13, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">11. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by
                    posting the new Privacy Policy on our website and updating the "Last Updated" date. Your continued
                    use of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#F5BE2D] mb-4">12. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-black/40 p-6 rounded-xl">
                    <p>
                      <strong>ÉliteReplay Inc.</strong>
                      <br />
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                      <br />
                      Email: privacy@elitereplay.com
                      <br />
                      Phone: +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}
