import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Star,
} from "lucide-react";

function PropertyCard({ property }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white card-shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 flex gap-2">
          {property.featured && (
            <span className="rounded-full bg-[#173f2a] px-3 py-1.5 text-xs font-semibold text-white">
              Featured
            </span>
          )}

          {!property.available && (
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-red-600 shadow">
              Not Available
            </span>
          )}
        </div>

        <button
          onClick={() => setFavorite(!favorite)}
          className={`absolute right-4 top-4 rounded-full p-2.5 shadow-lg transition ${
            favorite
              ? "bg-red-500 text-white"
              : "bg-white text-gray-600 hover:text-red-500"
          }`}
          aria-label="Add to favorites"
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>

          <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-gray-700">
            <Star size={15} fill="#f59e0b" className="text-amber-500" />
            {property.rating}
          </div>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin size={15} />
          {property.location}
        </p>

        <div className="mt-4 flex flex-wrap gap-3 border-y border-gray-100 py-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <BedDouble size={15} />
            {property.bedrooms} Beds
          </span>

          <span className="flex items-center gap-1.5">
            <Bath size={15} />
            {property.bathrooms} Baths
          </span>

          <span className="flex items-center gap-1.5">
            <Maximize size={15} />
            {property.area} sq.ft
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-2xl font-bold text-[#173f2a]">
              ₹{property.price.toLocaleString("en-IN")}
            </p>
            <p className="text-xs text-gray-400">per month</p>
          </div>

          <Link
            to={`/properties/${property.id}`}
            className="rounded-xl bg-[#173f2a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f2d1d]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;