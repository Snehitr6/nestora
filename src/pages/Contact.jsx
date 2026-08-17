import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#f8faf8]">
      <section className="bg-[#173f2a] py-20 text-white">
        <div className="container-width">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
            Contact us
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            We&apos;re here to help.
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-green-50/70">
            Have a question about a property or need help finding your next
            home? Send us a message.
          </p>
        </div>
      </section>

      <section className="container-width -mt-8 pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-[#102c1e] p-7 text-white">
            <h2 className="text-2xl font-bold">Get in touch</h2>

            <p className="mt-3 text-sm leading-7 text-green-100/60">
              Our support team is available to answer your questions.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <Mail className="shrink-0 text-green-300" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:hello@flexliving.com"
                    className="mt-1 block text-sm text-green-100/60 hover:text-white"
                  >
                    hello@flexliving.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="shrink-0 text-green-300" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-sm text-green-100/60 hover:text-white"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="shrink-0 text-green-300" />
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="mt-1 text-sm text-green-100/60">
                    Hyderabad, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="shrink-0 text-green-300" />
                <div>
                  <p className="font-semibold">Working hours</p>
                  <p className="mt-1 text-sm text-green-100/60">
                    Mon – Sat, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 card-shadow sm:p-8">
            <h2 className="text-2xl font-bold text-[#173f2a]">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="input-focus rounded-xl border border-gray-200 px-4 py-3.5 text-sm"
                />

                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="input-focus rounded-xl border border-gray-200 px-4 py-3.5 text-sm"
                />
              </div>

              <input
                required
                type="text"
                placeholder="Subject"
                className="input-focus w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm"
              />

              <textarea
                required
                rows="6"
                placeholder="How can we help you?"
                className="input-focus w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 text-sm"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#173f2a] py-3.5 font-semibold text-white transition hover:bg-[#0f2d1d]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>

            {submitted && (
              <div className="mt-5 rounded-xl bg-green-50 p-4 text-sm leading-6 text-[#173f2a]">
                Thank you! Your message has been submitted successfully. Our
                team will contact you soon.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;