import { RotateCcw, SlidersHorizontal } from "lucide-react";

function FilterBar({ filters, setFilters, onApply, onReset }) {
  const updateFilter = (name, value) => {
    setFilters((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 card-shadow">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal
            size={20}
            className="text-[#173f2a]"
          />

          <h3 className="font-bold text-gray-900">
            Filter Properties
          </h3>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 transition hover:text-[#173f2a]"
        >
          <RotateCcw size={15} />
          Reset
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">

        {/* Location */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-500">
            Location
          </label>

          <select
            value={filters.location}
            onChange={(e) =>
              updateFilter("location", e.target.value)
            }
            className="input-focus w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
          >
            <option value="">All locations</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-500">
            Property Type
          </label>

          <select
            value={filters.type}
            onChange={(e) =>
              updateFilter("type", e.target.value)
            }
            className="input-focus w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
          >
            <option value="">All types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
            <option value="Studio">Studio</option>
          </select>
        </div>

        {/* Minimum Price */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-500">
            Min Price
          </label>

          <select
            value={filters.minPrice}
            onChange={(e) =>
              updateFilter("minPrice", e.target.value)
            }
            className="input-focus w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
          >
            <option value="">No minimum</option>
            <option value="15000">₹15,000</option>
            <option value="20000">₹20,000</option>
            <option value="25000">₹25,000</option>
            <option value="30000">₹30,000</option>
            <option value="40000">₹40,000</option>
          </select>
        </div>

        {/* Maximum Price */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-500">
            Max Price
          </label>

          <select
            value={filters.maxPrice}
            onChange={(e) =>
              updateFilter("maxPrice", e.target.value)
            }
            className="input-focus w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
          >
            <option value="">No maximum</option>
            <option value="20000">₹20,000</option>
            <option value="30000">₹30,000</option>
            <option value="40000">₹40,000</option>
            <option value="50000">₹50,000</option>
            <option value="60000">₹60,000</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-500">
            Bedrooms
          </label>

          <select
            value={filters.bedrooms}
            onChange={(e) =>
              updateFilter("bedrooms", e.target.value)
            }
            className="input-focus w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
          >
            <option value="">Any</option>
            <option value="1">1+ Bedroom</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>

        {/* Amenities */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-gray-500">
            Amenities
          </label>

          <select
            value={filters.amenity}
            onChange={(e) =>
              updateFilter("amenity", e.target.value)
            }
            className="input-focus w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
          >
            <option value="">Any amenity</option>
            <option value="Wi-Fi">Wi-Fi</option>
            <option value="Parking">Parking</option>
            <option value="Gym">Gym</option>
            <option value="Swimming Pool">
              Swimming Pool
            </option>
            <option value="Garden">Garden</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={onApply}
        className="mt-5 w-full rounded-xl bg-[#173f2a] py-3 font-semibold text-white transition hover:bg-[#0f2d1d]"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default FilterBar;