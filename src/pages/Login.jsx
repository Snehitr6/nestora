import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Login successful. Welcome back!");

    setTimeout(() => {
      navigate("/properties");
    }, 1000);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#f8faf8] py-12">
      <div className="container-width flex min-h-[650px] items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white card-shadow md:grid-cols-2">
          <div className="hidden bg-[#173f2a] p-10 text-white md:flex md:flex-col md:justify-center">
            <LockKeyhole size={38} />

            <h1 className="mt-7 text-4xl font-bold">
              Welcome back to Flex Living.
            </h1>

            <p className="mt-5 leading-8 text-green-50/70">
              Sign in to continue exploring beautiful homes and managing your
              rental journey.
            </p>
          </div>

          <div className="p-7 sm:p-10">
            <h2 className="text-3xl font-bold text-[#173f2a]">
              Sign in
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter your details to access your account.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-500">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={() =>
                    setMessage("Password reset instructions sent to your email.")
                  }
                  className="font-semibold text-[#173f2a]"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#173f2a] py-3.5 font-semibold text-white transition hover:bg-[#0f2d1d]"
              >
                Sign In
              </button>
            </form>

            {message && (
              <p className="mt-4 rounded-xl bg-green-50 p-3 text-center text-sm text-[#173f2a]">
                {message}
              </p>
            )}

            <p className="mt-7 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-[#173f2a]"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;