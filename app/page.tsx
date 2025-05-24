"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, Zap, Server, QrCode, Play, Users, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. Hero Section with Full-screen Video */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
            <source
              src="/placeholder.svg?height=1080&width=1920&text=Slow-Motion+Basketball+Highlights"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        {/* Animated particles overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full bg-[#F5BE2D]/30"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          {/* Centered Logo */}
          <div className="mb-12 animate-fade-in">
            <Image
              src="/images/elitereplay-logo.png"
              alt="ÉliteReplay Logo"
              width={450}
              height={225}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Slogan */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight animate-slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F5BE2D] to-white">
              AI-powered Sports Highlights.
            </span>
            <br />
            <span className="text-[#F5BE2D] drop-shadow-lg">Instantly.</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-200 animate-fade-in-delay">
            Transform your game into professional highlight reels with cutting-edge AI technology
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up-delay">
            <Button
              asChild
              size="lg"
              className="bg-[#F5BE2D] hover:bg-[#F5BE2D]/90 text-black font-semibold rounded-full px-10 py-4 shadow-2xl shadow-[#F5BE2D]/30 hover:shadow-[#F5BE2D]/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="#apply">
                Apply as Pilot Court <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#F5BE2D] hover:bg-[#F5BE2D]/90 text-black font-semibold rounded-full px-10 py-4 shadow-2xl shadow-[#F5BE2D]/30 hover:shadow-[#F5BE2D]/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="/start?court=demo123">
                Start Demo Session <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 !bg-transparent border-white text-white hover:text-white hover:bg-white/10 rounded-full px-10 py-4 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Link href="/session/demo123">
                Just Played? <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-[#F5BE2D] rounded-full animate-pulse"></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float-up {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }
          .particle {
            animation: float-up linear infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.3s both;
          }
          .animate-slide-up {
            animation: slide-up 1s ease-out 0.5s both;
          }
          .animate-slide-up-delay {
            animation: slide-up 1s ease-out 0.8s both;
          }
        `}</style>
      </div>

      {/* 2. Player Features */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5BE2D]">
              Player Features
            </span>
          </h2>
          <p className="text-xl text-center text-gray-400 max-w-4xl mx-auto mb-20">
            Experience the future of sports highlights with our revolutionary technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Replay Wall */}
            <div className="group bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-[#F5BE2D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5BE2D]/20 hover:scale-105">
              <div className="bg-[#F5BE2D]/20 p-4 rounded-full w-fit mb-6 group-hover:bg-[#F5BE2D]/30 transition-all duration-300">
                <Camera className="h-8 w-8 text-[#F5BE2D]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#F5BE2D] transition-colors">Replay Wall</h3>
              <p className="text-gray-400 leading-relaxed">
                Multi-camera setup captures every angle of your game for complete coverage and cinematic perspectives.
              </p>
            </div>

            {/* AI Detection */}
            <div className="group bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-[#F5BE2D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5BE2D]/20 hover:scale-105">
              <div className="bg-[#F5BE2D]/20 p-4 rounded-full w-fit mb-6 group-hover:bg-[#F5BE2D]/30 transition-all duration-300">
                <Zap className="h-8 w-8 text-[#F5BE2D]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#F5BE2D] transition-colors">AI Detection</h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced AI automatically identifies key moments and creates personalized highlight reels in real-time.
              </p>
            </div>

            {/* Edge Processing */}
            <div className="group bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-[#F5BE2D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5BE2D]/20 hover:scale-105">
              <div className="bg-[#F5BE2D]/20 p-4 rounded-full w-fit mb-6 group-hover:bg-[#F5BE2D]/30 transition-all duration-300">
                <Server className="h-8 w-8 text-[#F5BE2D]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#F5BE2D] transition-colors">
                Edge Processing
              </h3>
              <p className="text-gray-400 leading-relaxed">
                On-site processing with NVIDIA Jetson Orin devices ensures instant, high-quality video generation.
              </p>
            </div>

            {/* QR Access */}
            <div className="group bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-[#F5BE2D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5BE2D]/20 hover:scale-105">
              <div className="bg-[#F5BE2D]/20 p-4 rounded-full w-fit mb-6 group-hover:bg-[#F5BE2D]/30 transition-all duration-300">
                <QrCode className="h-8 w-8 text-[#F5BE2D]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#F5BE2D] transition-colors">QR Access</h3>
              <p className="text-gray-400 leading-relaxed">
                Simply scan a QR code to start recording and receive your professional highlights instantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Demo CTA / Highlight Preview */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5BE2D]">
                See It In Action
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-4xl mx-auto">
              Experience how our AI transforms raw footage into stunning highlight reels
            </p>

            {/* Video Preview */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden relative shadow-2xl shadow-[#F5BE2D]/20 border border-gray-800 mb-16 group hover:shadow-[#F5BE2D]/30 transition-all duration-500">
              <div className="aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 to-gray-900/60">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#F5BE2D]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F5BE2D]/30 transition-all duration-300">
                      <Play className="h-10 w-10 text-[#F5BE2D] ml-1" />
                    </div>
                    <p className="text-white font-bold text-xl">Demo Highlight Reel</p>
                    <p className="text-gray-400">Basketball Session - 2:34</p>
                  </div>
                </div>
                {/* AI Detection Overlay */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-[#F5BE2D] rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-[#F5BE2D] rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-[#F5BE2D] rounded-full animate-pulse"></div>

                  {/* Detection Labels */}
                  <div className="absolute top-1/4 left-1/4 transform translate-x-12 -translate-y-6 bg-black/90 px-3 py-2 rounded-lg text-sm text-[#F5BE2D] font-medium">
                    Player Detected
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform translate-x-14 -translate-y-6 bg-black/90 px-3 py-2 rounded-lg text-sm text-[#F5BE2D] font-medium">
                    Ball Trajectory
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 transform translate-x-10 translate-y-10 bg-black/90 px-3 py-2 rounded-lg text-sm text-[#F5BE2D] font-medium">
                    Key Moment
                  </div>
                </div>
              </div>
              <div className="p-6 bg-black/60 backdrop-blur-sm">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-mono text-[#F5BE2D] font-medium">AI Processing: 94% Complete</div>
                  <div className="text-sm font-mono text-gray-400">Generating Highlights</div>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full mt-3">
                  <div className="h-full w-[94%] bg-gradient-to-r from-[#F5BE2D] to-[#F5BE2D]/80 rounded-full transition-all duration-1000"></div>
                </div>
              </div>
            </div>

            {/* Start Session Now Button */}
            <Button
              asChild
              size="lg"
              className="bg-[#F5BE2D] hover:bg-[#F5BE2D]/90 text-black font-bold rounded-full px-16 py-6 text-lg shadow-2xl shadow-[#F5BE2D]/30 hover:shadow-[#F5BE2D]/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="/start?court=demo123">
                Start Session Now <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 4. Court Operators & Partner Section */}
      <div id="apply" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5BE2D]">
              For Court Operators & Partners
            </span>
          </h2>
          <p className="text-xl text-center text-gray-400 max-w-4xl mx-auto mb-20">
            Transform your facility into a premium destination with ÉliteReplay technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Monetization */}
            <div className="group bg-gradient-to-br from-black to-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-[#F5BE2D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5BE2D]/20 hover:scale-105">
              <div className="bg-[#F5BE2D]/20 p-4 rounded-full w-fit mb-8 group-hover:bg-[#F5BE2D]/30 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-[#F5BE2D]" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#F5BE2D] transition-colors">Monetization</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Create new revenue streams by offering premium highlight packages to players and teams. Increase court
                bookings with unique value propositions.
              </p>
              <div className="h-1 w-24 bg-[#F5BE2D] rounded-full group-hover:w-40 transition-all duration-500"></div>
            </div>

            {/* Club Branding */}
            <div className="group bg-gradient-to-br from-black to-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-[#F5BE2D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5BE2D]/20 hover:scale-105">
              <div className="bg-[#F5BE2D]/20 p-4 rounded-full w-fit mb-8 group-hover:bg-[#F5BE2D]/30 transition-all duration-300">
                <Award className="h-8 w-8 text-[#F5BE2D]" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#F5BE2D] transition-colors">
                Club Branding
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Customize videos with your club's branding, logos, and colors for a professional look. Enhance your
                facility's reputation and marketing reach.
              </p>
              <div className="h-1 w-24 bg-[#F5BE2D] rounded-full group-hover:w-40 transition-all duration-500"></div>
            </div>

            {/* Community Features */}
            <div className="group bg-gradient-to-br from-black to-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-[#F5BE2D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5BE2D]/20 hover:scale-105">
              <div className="bg-[#F5BE2D]/20 p-4 rounded-full w-fit mb-8 group-hover:bg-[#F5BE2D]/30 transition-all duration-300">
                <Users className="h-8 w-8 text-[#F5BE2D]" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#F5BE2D] transition-colors">
                Community Features
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Build a stronger community by enabling players to share their highlights on social media. Foster
                engagement and attract new members.
              </p>
              <div className="h-1 w-24 bg-[#F5BE2D] rounded-full group-hover:w-40 transition-all duration-500"></div>
            </div>
          </div>

          {/* Partner CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#F5BE2D] hover:bg-[#F5BE2D]/90 text-black font-bold rounded-full px-12 py-6 text-lg shadow-2xl shadow-[#F5BE2D]/30 hover:shadow-[#F5BE2D]/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                Apply as Pilot Court <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 5. Footer */}
      <footer className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <Image
                src="/images/elitereplay-logo.png"
                alt="ÉliteReplay Logo"
                width={250}
                height={125}
                className="mx-auto md:mx-0 mb-4"
              />
              <p className="text-gray-400 text-lg">AI-powered sports highlights</p>
            </div>
            {/* Contact, Imprint, Privacy links */}
            <div className="flex flex-col sm:flex-row gap-8 text-center">
              <Link
                href="/contact"
                className="text-gray-400 hover:text-[#F5BE2D] transition-colors text-lg font-medium"
              >
                Contact
              </Link>
              <Link
                href="/imprint"
                className="text-gray-400 hover:text-[#F5BE2D] transition-colors text-lg font-medium"
              >
                Imprint
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#F5BE2D] transition-colors text-lg font-medium"
              >
                Privacy
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            © {new Date().getFullYear()} ÉliteReplay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
