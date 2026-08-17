import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Home as HomeIcon,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import SectionTitle from "../components/SectionTitle";

function Home() {
  return (
    <>
      <Hero />

      <section className="section-padding">
        <div className="container-width">
          <SectionTitle
            eyebrow="Why Flex Living"
            title="A simpler way to find your next home"
            description="We make renting easier by bringing quality homes, trusted listings and a smooth rental experience together."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-100 bg-white p-7 card-shadow">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#173f2a]">
                <ShieldCheck size={24} />
              </div>

              <h3 className="text-xl font-bold">Verified properties</h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Every property is carefully reviewed so you can search with
                confidence.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-7 card-shadow">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#173f2a]">
                <KeyRound size={24} />
              </div>

              <h3 className="text-xl font-bold">Easy booking</h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Discover your favorite home and connect with property experts
                without unnecessary steps.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-7 card-shadow">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#173f2a]">
                <HomeIcon size={24} />
              </div>

              <h3 className="text-xl font-bold">Homes for every lifestyle</h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                From cozy studios to premium villas, find a home that fits
                your needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProperties />

      <section className="section-padding">
        <div className="container-width">
          <div className="overflow-hidden rounded-[2rem] bg-[#173f2a] px-6 py-12 text-white md:px-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
                Ready to move?
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
                Your next chapter could start with the right home.
              </h2>

              <div className="mt-6 flex flex-col gap-3 text-sm text-green-50/80 sm:flex-row">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} />
                  Verified listings
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} />
                  Flexible options
                </span>
              </div>
            </div>

            <Link
              to="/properties"
              className="mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#173f2a] transition hover:bg-green-50 lg:mt-0"
            >
              Browse Properties
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;