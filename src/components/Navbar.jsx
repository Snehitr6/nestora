import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-[#173f2a] font-semibold"
        : "text-gray-600 hover:text-[#173f2a]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container-width flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#173f2a] text-xl font-bold text-white">
            N
          </div>

          <div>
            <p className="text-xl font-bold tracking-tight text-[#173f2a]">
              Nestora
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Find your place
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/properties"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#173f2a] hover:text-[#173f2a]"
          >
            <Search size={17} />
            Search
          </Link>

          <Link
            to="/login"
            className="rounded-full px-4 py-2.5 text-sm font-semibold text-[#173f2a] transition hover:bg-gray-50"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-[#173f2a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f2d1d]"
          >
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-[#173f2a] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-5 md:hidden">
          <nav className="container-width flex flex-col gap-1 pt-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 ${
                    isActive
                      ? "bg-green-50 font-semibold text-[#173f2a]"
                      : "text-gray-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-gray-200 py-3 text-center font-semibold text-[#173f2a]"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-[#173f2a] py-3 text-center font-semibold text-white"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;