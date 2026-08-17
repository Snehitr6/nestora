 import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, Eye, EyeOff } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Account created successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#f8faf8] py-12">
      <div className="container-width flex min-h-[650px] items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white card-shadow md:grid-cols-2">
          <div className="p-7 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#173f2a]">
              <UserPlus size={24} />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-[#173f2a]">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Start finding a home you&apos;ll love.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="input-focus w-full rounded-xl border border-gray-200 px-4 py-3.5"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email
                </label>

                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="input-focus w-full rounded-xl border border-gray-200 px-4 py-3.5"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <input
                    required
                    minLength="6"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="input-focus w-full rounded-xl border border-gray-200 px-4 py-3.5 pr-12"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex gap-2 text-sm text-gray-500">
                <input required type="checkbox" className="mt-1" />
                <span>
                  I agree to the Terms of Service and Privacy Policy.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#173f2a] py-3.5 font-semibold text-white transition hover:bg-[#0f2d1d]"
              >
                Create Account
              </button>
            </form>

            {message && (
              <p className="mt-4 rounded-xl bg-green-50 p-3 text-center text-sm text-[#173f2a]">
                {message}
              </p>
            )}

            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-[#173f2a]">
                Sign In
              </Link>
            </p>
          </div>

          <div className="hidden bg-[#173f2a] p-10 text-white md:flex md:flex-col md:justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
              Welcome to Nestora
            </p>

            <h2 className="mt-5 text-4xl font-bold">
              Your next home is closer than you think.
            </h2>

            <p className="mt-5 leading-8 text-green-50/70">
              Create an account and save your favorite properties, contact
              property experts and discover homes that match your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;