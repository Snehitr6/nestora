import { Link } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";

function About() {
  return (
    <main>
      <section className="bg-[#173f2a] py-20 text-white">
        <div className="container-width">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
            About Nestora
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            We believe finding a home should feel simple.
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-green-50/70">
            Nestora helps people discover quality rental properties and
            make confident decisions about where they live.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width grid items-center gap-12 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
            alt="Modern home interior"
            className="h-[480px] w-full rounded-[2rem] object-cover"
          />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c9d89]">
              Our story
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f2a] sm:text-4xl">
              Making better renting experiences possible.
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              We created Nestora to remove the stress from house hunting.
              Instead of spending hours looking through unreliable listings,
              renters can discover carefully selected homes in one simple
              platform.
            </p>

            <p className="mt-4 leading-8 text-gray-500">
              Our goal is to make every part of the journey clearer, from
              searching and comparing properties to contacting property
              experts and planning your move.
            </p>

            <Link
              to="/properties"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#173f2a] px-6 py-3 font-semibold text-white"
            >
              Explore Properties
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8faf8]">
        <div className="container-width">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 card-shadow">
              <ShieldCheck className="text-[#173f2a]" size={30} />
              <h3 className="mt-5 text-xl font-bold">Trust</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                We focus on transparent property information and dependable
                rental experiences.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 card-shadow">
              <Users className="text-[#173f2a]" size={30} />
              <h3 className="mt-5 text-xl font-bold">Community</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                We connect renters, homeowners and property specialists
                through a friendly platform.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 card-shadow">
              <Heart className="text-[#173f2a]" size={30} />
              <h3 className="mt-5 text-xl font-bold">People first</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                We design every experience around what makes finding a home
                easier for people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width text-center">
          <Target className="mx-auto text-[#173f2a]" size={38} />

          <h2 className="mt-5 text-3xl font-bold text-[#173f2a]">
            Our mission
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-500">
            To create a modern rental platform where everyone can find a place
            that feels like home without unnecessary complexity.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;