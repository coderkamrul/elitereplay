"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Camera,
  Zap,
  Server,
  QrCode,
  Play,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* 1. Hero Section with Full-screen Video */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source
              src="/placeholder.svg?height=1080&width=1920&text=Slow-Motion+Basketball+Highlights"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-800/10 to-black/80"></div>
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
            Transform your game into professional highlight reels with
            cutting-edge AI technology
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
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
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

      {/* 2. Player Features - REDESIGNED */}
      <div className="py-24 bg-gradient-to-b from-black to-blue-800/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-3xl"></div>
          <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-blue-700/5 blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-blue-700/5 blur-3xl"></div>

          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-6 opacity-10">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
                style={{ left: `${(i / 6) * 100}%` }}
              ></div>
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ top: `${(i / 6) * 100}%` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20 relative">
              <div className="inline-block">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#F5BE2D] bg-[#F5BE2D]/10 px-4 py-2 rounded-full mb-4 inline-block">
                  Elite Features
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5BE2D]">
                    Player Features
                  </span>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#F5BE2D]"></div>
                </h2>
              </div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-8">
                Experience the future of sports highlights with our
                revolutionary technology
              </p>
            </div>

            {/* Features - Staggered Layout */}
            <div className="relative">
              {/* Feature 1 - Replay Wall */}
              <div className="feature-card-wrapper mb-16 md:mb-32">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="feature-image-container md:w-3/5 relative mb-8 md:mb-0">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#F5BE2D]/10">
                      <div className="aspect-[16/9]">
                        <Image
                          src="/images/replay-wall-card-bg.png"
                          alt="Replay Wall"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                        <div className="flex items-center">
                          <div className="bg-[#F5BE2D]/20 backdrop-blur-md p-4 rounded-full mr-5">
                            <Camera className="h-8 w-8 text-[#F5BE2D]" />
                          </div>
                          <h3 className="text-3xl font-bold text-white">
                            Replay Wall
                          </h3>
                        </div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#F5BE2D]/30 rounded-full"></div>
                    <div className="absolute -top-6 -left-6 w-20 h-20 border border-[#F5BE2D]/20 rounded-full"></div>
                  </div>
                  <div className="feature-content md:w-2/5 md:pl-16">
                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-gray-800 transform md:translate-x-[-80px] hover:border-[#F5BE2D]/30 transition-all duration-500 shadow-lg">
                      <h4 className="text-2xl font-semibold mb-4 text-white">
                        Multi-Camera Setup
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Our advanced multi-camera system captures every angle of
                        your game, ensuring no moment is missed. The
                        synchronized cameras work together to provide complete
                        coverage and cinematic perspectives.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          360° coverage of the court
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          4K Ultra HD resolution
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          Automatic best angle selection
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - AI Detection */}
              <div className="feature-card-wrapper mb-16 md:mb-32">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="feature-image-container md:w-3/5 relative mb-8 md:mb-0">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#F5BE2D]/10">
                      <div className="aspect-[16/9]">
                        <Image
                          src="/images/ai-detection-feature.png"
                          alt="AI Detection"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 right-0 w-full p-6 md:p-10 text-right">
                        <div className="flex items-center justify-end">
                          <h3 className="text-3xl font-bold text-white mr-5">
                            AI Detection
                          </h3>
                          <div className="bg-[#F5BE2D]/20 backdrop-blur-md p-4 rounded-full">
                            <Zap className="h-8 w-8 text-[#F5BE2D]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#F5BE2D]/30 rounded-full"></div>
                    <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#F5BE2D]/20 rounded-full"></div>
                  </div>
                  <div className="feature-content md:w-2/5 md:pr-16">
                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-gray-800 transform md:translate-x-[80px] hover:border-[#F5BE2D]/30 transition-all duration-500 shadow-lg">
                      <h4 className="text-2xl font-semibold mb-4 text-white">
                        Smart Highlight Creation
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Our advanced AI automatically identifies key moments in
                        your game and creates personalized highlight reels in
                        real-time, ensuring you never miss your best plays.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          Automatic key moment detection
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          Player and ball tracking
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          Personalized highlight creation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Edge Processing */}
              <div className="feature-card-wrapper mb-16 md:mb-32">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="feature-image-container md:w-3/5 relative mb-8 md:mb-0">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#F5BE2D]/10">
                      <div className="aspect-[16/9]">
                        <Image
                          src="/images/edge-processing-feature.png"
                          alt="Edge Processing"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                        <div className="flex items-center">
                          <div className="bg-[#F5BE2D]/20 backdrop-blur-md p-4 rounded-full mr-5">
                            <Server className="h-8 w-8 text-[#F5BE2D]" />
                          </div>
                          <h3 className="text-3xl font-bold text-white">
                            Edge Processing
                          </h3>
                        </div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#F5BE2D]/30 rounded-full"></div>
                    <div className="absolute -top-6 -left-6 w-20 h-20 border border-[#F5BE2D]/20 rounded-full"></div>
                  </div>
                  <div className="feature-content md:w-2/5 md:pl-16">
                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-gray-800 transform md:translate-x-[-80px] hover:border-[#F5BE2D]/30 transition-all duration-500 shadow-lg">
                      <h4 className="text-2xl font-semibold mb-4 text-white">
                        Instant Processing
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Our on-site NVIDIA Jetson Orin devices process your
                        video locally in real-time, ensuring instant,
                        high-quality video generation without delays or cloud
                        dependencies.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          Real-time video processing
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          High-performance AI computing
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          No cloud upload required
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 - QR Access */}
              <div className="feature-card-wrapper">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="feature-image-container md:w-3/5 relative mb-8 md:mb-0">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#F5BE2D]/10">
                      <div className="aspect-[16/9]">
                        <Image
                          src="/images/seamless-experience-qr.png"
                          alt="QR Access"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 right-0 w-full p-6 md:p-10 text-right">
                        <div className="flex items-center justify-end">
                          <h3 className="text-3xl font-bold text-white mr-5">
                            QR Access
                          </h3>
                          <div className="bg-[#F5BE2D]/20 backdrop-blur-md p-4 rounded-full">
                            <QrCode className="h-8 w-8 text-[#F5BE2D]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#F5BE2D]/30 rounded-full"></div>
                    <div className="absolute -top-6 -right-6 w-20 h-20 border border-[#F5BE2D]/20 rounded-full"></div>
                  </div>
                  <div className="feature-content md:w-2/5 md:pr-16">
                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-gray-800 transform md:translate-x-[80px] hover:border-[#F5BE2D]/30 transition-all duration-500 shadow-lg">
                      <h4 className="text-2xl font-semibold mb-4 text-white">
                        Seamless Experience
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Simply scan a QR code at the court to start your
                        recording session and receive your professional
                        highlights instantly on your device.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          One-scan session start
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          Instant delivery to your device
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-3"></div>
                          Easy sharing to social media
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Demo Section */}
            <div className="mt-24 text-center relative">
              <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent to-[#F5BE2D]/30"></div>
              <Button
                asChild
                size="lg"
                className="relative bg-black hover:bg-black/80 text-[#F5BE2D] border-2 border-[#F5BE2D] rounded-full px-10 py-6 shadow-xl shadow-[#F5BE2D]/10 hover:shadow-[#F5BE2D]/30 transition-all duration-500 hover:scale-105 group"
              >
                <Link href="/demo" className="flex items-center">
                  <span className="mr-3 text-lg font-semibold">
                    Try Interactive Demo
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F5BE2D] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-5 w-5 text-black ml-1" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Demo CTA / Highlight Preview - UPDATED WITH AI IMAGE */}
      <div className="py-24 bg-gradient-to-b from-blue-800/30 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5BE2D]">
                See It In Action
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-4xl mx-auto">
              Experience how our AI transforms raw footage into stunning
              highlight reels
            </p>

            {/* Video Preview with AI Generated Image */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden relative shadow-2xl shadow-[#F5BE2D]/20 border border-gray-800 mb-16 group hover:shadow-[#F5BE2D]/30 transition-all duration-500">
              <div className="aspect-video relative">
                {/* AI Generated Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/demo-highlight-reel.png"
                    alt="Demo Highlight Reel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-gray-900/40"></div>
                </div>

                {/* Play Button and Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#F5BE2D]/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F5BE2D]/30 transition-all duration-300 border border-[#F5BE2D]/30">
                      <Play className="h-10 w-10 text-[#F5BE2D] ml-1" />
                    </div>
                    <p className="text-white font-bold text-xl mb-2">
                      Demo Highlight Reel
                    </p>
                    <p className="text-gray-300">Basketball Session - 2:34</p>
                  </div>
                </div>

                {/* AI Detection Overlay Elements */}
                <div className="absolute inset-0">
                  {/* Player Detection Boxes */}
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-[#F5BE2D] rounded-lg animate-pulse opacity-80"></div>
                  <div className="absolute top-1/2 right-1/3 w-24 h-24 border-2 border-[#F5BE2D] rounded-lg animate-pulse opacity-80"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-[#F5BE2D] rounded-lg animate-pulse opacity-80"></div>

                  {/* Ball Tracking */}
                  <div className="absolute top-1/3 left-1/2 w-8 h-8 border-2 border-[#F5BE2D] rounded-full animate-pulse"></div>

                  {/* Detection Labels */}
                  <div className="absolute top-1/4 left-1/4 transform translate-x-12 -translate-y-6 bg-black/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-[#F5BE2D] font-medium border border-[#F5BE2D]/30">
                    Player 1 (94%)
                  </div>
                  <div className="absolute top-1/2 right-1/3 transform translate-x-14 -translate-y-6 bg-black/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-[#F5BE2D] font-medium border border-[#F5BE2D]/30">
                    Player 2 (89%)
                  </div>
                  <div className="absolute top-1/3 left-1/2 transform translate-x-10 -translate-y-6 bg-black/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-[#F5BE2D] font-medium border border-[#F5BE2D]/30">
                    Ball Tracking
                  </div>
                  <div className="absolute bottom-1/3 left-1/3 transform translate-x-10 translate-y-10 bg-black/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-[#F5BE2D] font-medium border border-[#F5BE2D]/30">
                    Key Moment
                  </div>

                  {/* Movement Trajectory Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M200,150 C250,130 300,200 350,180"
                      fill="none"
                      stroke="#F5BE2D"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                      opacity="0.6"
                      className="animate-pulse"
                    />
                    <path
                      d="M400,200 C450,180 500,250 550,230"
                      fill="none"
                      stroke="#F5BE2D"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                      opacity="0.6"
                      className="animate-pulse"
                    />
                  </svg>
                </div>

                {/* Corner AI Status Indicators */}
                <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#F5BE2D]/30">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#F5BE2D] rounded-full mr-2 animate-pulse"></div>
                    <span className="text-[#F5BE2D] text-sm font-medium">
                      AI ACTIVE
                    </span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#F5BE2D]/30">
                  <span className="text-[#F5BE2D] text-sm font-medium">
                    4K • 60FPS
                  </span>
                </div>
              </div>

              {/* Processing Status Bar */}
              <div className="p-6 bg-black/80 backdrop-blur-sm border-t border-gray-800">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm font-mono text-[#F5BE2D] font-medium">
                    AI Processing: 94% Complete
                  </div>
                  <div className="text-sm font-mono text-gray-400">
                    Generating Highlights
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-gradient-to-r from-[#F5BE2D] to-[#F5BE2D]/80 rounded-full transition-all duration-1000 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                  <span>Objects Detected: 3 Players, 1 Ball</span>
                  <span>Key Moments: 5 Found</span>
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
      <div id="apply" className="py-24 bg-gradient-to-b from-black to-blue-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5BE2D]">
              For Court Operators & Partners
            </span>
          </h2>
          <p className="text-xl text-center text-gray-400 max-w-4xl mx-auto mb-20">
            Transform your facility into a premium destination with ÉliteReplay
            technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Monetization */}
            <div className="group bg-gradient-to-br from-black to-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-[#F5BE2D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5BE2D]/20 hover:scale-105">
              <div className="bg-[#F5BE2D]/20 p-4 rounded-full w-fit mb-8 group-hover:bg-[#F5BE2D]/30 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-[#F5BE2D]" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#F5BE2D] transition-colors">
                Monetization
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Create new revenue streams by offering premium highlight
                packages to players and teams. Increase court bookings with
                unique value propositions.
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
                Customize videos with your club's branding, logos, and colors
                for a professional look. Enhance your facility's reputation and
                marketing reach.
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
                Build a stronger community by enabling players to share their
                highlights on social media. Foster engagement and attract new
                members.
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
              <p className="text-gray-400 text-lg">
                AI-powered sports highlights
              </p>
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
  );
}
