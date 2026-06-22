import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  const bgImageUrl =
    "https://img.pikbest.com/background/20220119/technology-city-building-blue-sense_6230361.jpg!f305cw";

  return (
    <div
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
      className="relative h-[60vh] md:h-[70vh] w-full bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        {/* Content */}
        <div className="max-w-4xl px-6 md:px-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Learn from Industry Experts Online {" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Learning Platform
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Generate high-quality images from simple text prompts instantly.
            Create unique artwork, illustrations, and designs powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing">
              <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all">
                Generate Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button
                variant="bordered"
                className="border-white/50 text-white font-medium px-8 py-3 rounded-xl hover:bg-white/10 transition-all"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;