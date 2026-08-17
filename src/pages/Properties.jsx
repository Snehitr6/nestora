import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import FilterBar from "../components/FilterBar";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

function Properties() {
  const [searchParams] = useSearchParams();

  const initialFilters = {
    location: searchParams.get("location") || "",
    type: searchParams.get("type") || "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    amenity: "",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [appliedFilters, setAppliedFilters] =
    useState(initialFilters);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {

      const matchesLocation =
        !appliedFilters.location ||
        property.location
          .toLowerCase()
          .includes(
            appliedFilters.location.toLowerCase()
          ) ||
        property.city
          .toLowerCase()
          .includes(
            appliedFilters.location.toLowerCase()
          );

      const matchesType =
        !appliedFilters.type ||
        property.type === appliedFilters.type;

      const matchesMinPrice =
        !appliedFilters.minPrice ||
        property.price >=
          Number(appliedFilters.minPrice);

      const matchesMaxPrice =
        !appliedFilters.maxPrice ||
        property.price <=
          Number(appliedFilters.maxPrice);

      const matchesBedrooms =
        !appliedFilters.bedrooms ||
        property.bedrooms >=
          Number(appliedFilters.bedrooms);

      const matchesAmenity =
        !appliedFilters.amenity ||
        property.amenities.includes(
          appliedFilters.amenity
        );

      return (
        matchesLocation &&
        matchesType &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBedrooms &&
        matchesAmenity
      );
    });
  }, [appliedFilters]);

  const handleApply = () => {
    setAppliedFilters(filters);
  };

  const handleReset = () => {
    const emptyFilters = {
      location: "",
      type: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      amenity: "",
    };

    setFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
  };

  return (
    <main className="bg-[#f8faf8]">

      {/* Page Header */}
      <section className="bg-[#173f2a] py-14 text-white">
        <div className="container-width">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
            Property Listings
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Find your perfect rental
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-green-50/70">
            Browse verified homes and apartments across
            popular locations. Use filters to narrow down
            your search.
          </p>
        </div>
      </section>

      {/* Filters + Listings */}
      <section className="container-width -mt-6 pb-20">

        <FilterBar
          filters={filters}
          setFilters={setFilters}
          onApply={handleApply}
          onReset={handleReset}
        />

        <div className="mt-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-400">
              Available properties
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#173f2a]">
              {filteredProperties.length} homes found
            </h2>
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-gray-100 bg-white px-6 py-16 text-center">

            <SearchX
              className="mx-auto text-gray-300"
              size={50}
            />

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              No properties found
            </h3>

            <p className="mt-2 text-gray-500">
              Try changing your filters and search again.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="mt-6 rounded-xl bg-[#173f2a] px-5 py-3 font-semibold text-white transition hover:bg-[#0f2d1d]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Properties;