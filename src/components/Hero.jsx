import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="hero-pattern overflow-hidden text-white">
      <div className="container-width relative py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-green-50">
              <span className="h-2 w-2 rounded-full bg-green-300" />
              Trusted homes for modern living
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Find a place you&apos;ll love to call home.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-green-50/75 sm:text-lg">
              Discover thoughtfully selected rental homes in the best
              neighborhoods. Search, compare and find a space that fits your
              lifestyle.
            </p>

            <div className="mt-8 max-w-2xl">
              <SearchBar />
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-green-50/80">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Verified properties
              </div>

              <div className="flex items-center gap-2">
                <Star size={18} />
                Highly rated homes
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} />
                10k+ happy renters
              </div>
            </div>

            <Link
              to="/properties"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-white underline decoration-white/30 underline-offset-8 transition hover:decoration-white"
            >
              Explore all properties
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                alt="Beautiful modern rental home"
                className="h-[500px] w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white p-4 text-gray-900 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">Modern Green Villa</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Nadi Betta, Bengaluru, India
                    </p>
                  </div>

                  <div className="rounded-xl bg-green-50 px-3 py-2 text-sm font-bold text-[#173f2a]">
                    ₹42K/mo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;