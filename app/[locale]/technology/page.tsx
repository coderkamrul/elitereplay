import Link from "next/link"
import { ArrowLeft, Cpu, Brain, Zap, Camera, Server, Film, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLocale } from "next-intl";
export default function TechnologyPage() {
  const locale = useLocale();
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <Image src="/images/elitereplay-logo.png" alt="ÉliteReplay Logo" width={120} height={60} />
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <div className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F5BE2D]">
                  Our AI Technology
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how our cutting-edge AI transforms ordinary sports footage into extraordinary highlight reels
              </p>
            </div>
          </div>
        </div>

        {/* Hardware Section */}
        <div className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Edge Computing Hardware</h2>

              <div className="bg-gray-900 rounded-xl p-8 mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-black p-6 rounded-xl flex items-center justify-center md:w-1/3">
                    <Cpu className="h-24 w-24 text-[#F5BE2D]" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-4">NVIDIA Jetson Orin</h3>
                    <p className="text-gray-300 mb-4">
                      Our system uses NVIDIA Jetson Orin edge devices installed on-site at sports facilities. These
                      powerful AI computers process video in real-time without needing to send data to the cloud.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-32 font-semibold">Processing:</div>
                        <div className="text-gray-300">Up to 275 TOPS of AI performance</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-32 font-semibold">Memory:</div>
                        <div className="text-gray-300">64GB RAM for complex AI models</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-32 font-semibold">Connectivity:</div>
                        <div className="text-gray-300">High-speed network for instant delivery</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-900 p-6 rounded-xl">
                  <Camera className="h-10 w-10 text-[#F5BE2D] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Multi-Camera Setup</h3>
                  <p className="text-gray-400">
                    Our system uses multiple 4K cameras positioned around the court to capture every angle of the game.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl">
                  <Server className="h-10 w-10 text-[#F5BE2D] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Local Storage</h3>
                  <p className="text-gray-400">
                    High-speed SSD storage allows us to keep raw footage temporarily for processing without delays.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl">
                  <Zap className="h-10 w-10 text-[#F5BE2D] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Power Efficiency</h3>
                  <p className="text-gray-400">
                    Our hardware is designed for maximum power efficiency while delivering high-performance AI
                    processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Technology Section */}
        <div className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">AI Technology Stack</h2>

              <div className="space-y-12">
                <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-[#F5BE2D]/20 p-4 rounded-full">
                      <Brain className="h-12 w-12 text-[#F5BE2D]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Computer Vision Models</h3>
                      <p className="text-gray-300 mb-6">
                        Our proprietary computer vision models are trained on millions of hours of sports footage to
                        recognize players, track ball movement, and understand game dynamics.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-black/40 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Object Detection</h4>
                          <p className="text-gray-400 text-sm">
                            Identifies and tracks players, balls, and other game elements with 99.7% accuracy
                          </p>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Action Recognition</h4>
                          <p className="text-gray-400 text-sm">
                            Classifies specific sports actions like dunks, goals, or impressive plays
                          </p>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Pose Estimation</h4>
                          <p className="text-gray-400 text-sm">
                            Tracks player movements and body positions to identify athletic feats
                          </p>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Trajectory Analysis</h4>
                          <p className="text-gray-400 text-sm">
                            Predicts and analyzes ball trajectories to identify successful shots
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-[#F5BE2D]/20 p-4 rounded-full">
                      <Film className="h-12 w-12 text-[#F5BE2D]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Highlight Generation Engine</h3>
                      <p className="text-gray-300 mb-6">
                        Our AI doesn't just detect moments—it understands what makes a great highlight and automatically
                        edits footage into compelling videos.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-black/40 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Excitement Score Algorithm</h4>
                          <p className="text-gray-400">
                            Each moment receives an "excitement score" based on factors like:
                          </p>
                          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                            <li>Player movement intensity</li>
                            <li>Ball speed and trajectory</li>
                            <li>Uniqueness of the action</li>
                            <li>Game context (scoring, timing)</li>
                          </ul>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Automatic Video Editing</h4>
                          <p className="text-gray-400">The AI automatically applies professional editing techniques:</p>
                          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                            <li>Selecting the best camera angles</li>
                            <li>Adding slow-motion effects at key moments</li>
                            <li>Creating smooth transitions between clips</li>
                            <li>Timing cuts to maximize impact</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-[#F5BE2D]/20 p-4 rounded-full">
                      <Clock className="h-12 w-12 text-[#F5BE2D]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Real-Time Processing Pipeline</h3>
                      <p className="text-gray-300 mb-6">
                        Our system processes video in real-time, delivering highlights within minutes of game
                        completion.
                      </p>

                      <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#F5BE2D]/30"></div>
                        <div className="space-y-8 relative">
                          <div className="pl-12 relative">
                            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#F5BE2D]/20 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#F5BE2D]"></div>
                            </div>
                            <h4 className="font-semibold mb-1">Video Capture</h4>
                            <p className="text-gray-400">
                              Multiple 4K cameras capture footage from different angles simultaneously
                            </p>
                          </div>

                          <div className="pl-12 relative">
                            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#F5BE2D]/20 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#F5BE2D]"></div>
                            </div>
                            <h4 className="font-semibold mb-1">Pre-processing</h4>
                            <p className="text-gray-400">
                              Raw footage is stabilized and synchronized across all camera feeds
                            </p>
                          </div>

                          <div className="pl-12 relative">
                            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#F5BE2D]/20 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#F5BE2D]"></div>
                            </div>
                            <h4 className="font-semibold mb-1">AI Analysis</h4>
                            <p className="text-gray-400">
                              Computer vision models analyze the footage to detect players, actions, and key moments
                            </p>
                          </div>

                          <div className="pl-12 relative">
                            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#F5BE2D]/20 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#F5BE2D]"></div>
                            </div>
                            <h4 className="font-semibold mb-1">Highlight Selection</h4>
                            <p className="text-gray-400">
                              The system ranks moments by excitement score and selects the best for inclusion
                            </p>
                          </div>

                          <div className="pl-12 relative">
                            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#F5BE2D]/20 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#F5BE2D]"></div>
                            </div>
                            <h4 className="font-semibold mb-1">Automatic Editing</h4>
                            <p className="text-gray-400">
                              Selected clips are automatically edited with transitions, effects, and timing adjustments
                            </p>
                          </div>

                          <div className="pl-12 relative">
                            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#F5BE2D]/20 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#F5BE2D]"></div>
                            </div>
                            <h4 className="font-semibold mb-1">Delivery</h4>
                            <p className="text-gray-400">
                              Final highlight video is delivered to the user's device via the web platform
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Unmatched Results</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI technology delivers exceptional performance across all metrics
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-[#F5BE2D] mb-2">99.7%</div>
                  <div className="text-gray-300 font-semibold">Detection Accuracy</div>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-[#F5BE2D] mb-2">&lt;5 min</div>
                  <div className="text-gray-300 font-semibold">Processing Time</div>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-[#F5BE2D] mb-2">4K</div>
                  <div className="text-gray-300 font-semibold">Video Quality</div>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-[#F5BE2D] mb-2">95%</div>
                  <div className="text-gray-300 font-semibold">User Satisfaction</div>
                </div>
              </div>

              <div className="flex justify-center">
                <Link href={`/${locale}/start?court=demo123`}>
                  <Button size="lg" className="bg-[#F5BE2D] hover:bg-[#F5BE2D]/90 text-white">
                    Try It Yourself <Award className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                Élite<span className="text-[#F5BE2D]">Replay</span>
              </h2>
              <p className="text-gray-400 mt-2">AI-powered sports highlights</p>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            © {new Date().getFullYear()} ÉliteReplay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
