import { useState } from "react";
import { MapPin, Search, Home, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location) {
      params.set("location", location);
    }

    if (type) {
      params.set("type", type);
    }

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="rounded-2xl bg-white p-3 shadow-2xl shadow-black/10">
      <div className="grid gap-2 md:grid-cols-[1fr_1fr_auto]">
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
          <MapPin className="text-[#173f2a]" size={20} />

          <div className="min-w-0 flex-1">
            <label className="block text-xs font-semibold text-gray-400">
              Location
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or area"
              className="w-full border-0 bg-transparent p-0 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
          <Home className="text-[#173f2a]" size={20} />

          <div className="min-w-0 flex-1">
            <label className="block text-xs font-semibold text-gray-400">
              Property Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-800 outline-none"
            >
              <option value="">Any type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="House">House</option>
              <option value="Studio">Studio</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#173f2a] px-7 py-3 font-semibold text-white transition hover:bg-[#0f2d1d]"
        >
          <Search size={19} />
          Search
        </button>
      </div>

      <div className="mt-2 flex items-center gap-2 px-2 text-xs text-gray-400">
        <SlidersHorizontal size={14} />
        Search by location and property type
      </div>
    </div>
  );
}

export default SearchBar;