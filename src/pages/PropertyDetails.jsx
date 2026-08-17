import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Check,
  Heart,
  MapPin,
  Maximize,
  ShieldCheck,
  Star,
  Wifi,
  Car,
  Dumbbell,
  Waves,
  Wind,
  ChefHat,
  TreePine,
} from "lucide-react";
import { properties } from "../data/properties";

function AmenityIcon({ name }) {
  const icons = {
    "Wi-Fi": Wifi,
    Parking: Car,
    Gym: Dumbbell,
    "Swimming Pool": Waves,
    "Air Conditioning": Wind,
    Kitchen: ChefHat,
    Garden: TreePine,
    Security: ShieldCheck,
  };

  const Icon = icons[name] || Check;

  return <Icon size={18} />;
}

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");

  if (!property) {
    return (
      <main className="container-width py-24 text-center">
        <h1 className="text-3xl font-bold text-[#173f2a]">
          Property not found
        </h1>

        <p className="mt-3 text-gray-500">
          The property you are looking for does not exist.
        </p>

        <Link
          to="/properties"
          className="mt-6 inline-block rounded-xl bg-[#173f2a] px-6 py-3 font-semibold text-white"
        >
          Back to Properties
        </Link>
      </main>
    );
  }

  const handleBooking = (event) => {
    event.preventDefault();
    setBookingMessage(
      "Your request has been submitted. Our property specialist will contact you shortly."
    );
  };

  return (
    <main className="bg-[#f8faf8]">
      <div className="container-width py-8">
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#173f2a]"
        >
          <ArrowLeft size={17} />
          Back to Properties
        </Link>

        <div className="mt-6 grid gap-3 md:grid-cols-4 md:grid-rows-2">
          <div className="overflow-hidden rounded-3xl md:col-span-2 md:row-span-2">
            <img
              src={property.images[selectedImage]}
              alt={property.title}
              className="h-[380px] w-full object-cover md:h-[560px]"
            />
          </div>

          {property.images.slice(1, 4).map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(index + 1)}
              className="hidden overflow-hidden rounded-3xl md:block"
            >
              <img
                src={image}
                alt={`${property.title} ${index + 2}`}
                className="h-full min-h-[180px] w-full object-cover transition hover:scale-105"
              />
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-[#173f2a]">
                    {property.type}
                  </span>

                  <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                    <Star
                      size={16}
                      fill="#f59e0b"
                      className="text-amber-500"
                    />
                    {property.rating} ({property.reviews} reviews)
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-bold text-[#173f2a] sm:text-4xl">
                  {property.title}
                </h1>

                <p className="mt-3 flex items-center gap-2 text-gray-500">
                  <MapPin size={18} />
                  {property.location}
                </p>
              </div>

              <button
                onClick={() => setFavorite(!favorite)}
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition ${
                  favorite
                    ? "border-red-200 bg-red-50 text-red-500"
                    : "border-gray-200 bg-white text-gray-500 hover:text-red-500"
                }`}
                aria-label="Favorite property"
              >
                <Heart
                  size={21}
                  fill={favorite ? "currentColor" : "none"}
                />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 rounded-2xl border border-gray-100 bg-white p-5">
              <div className="text-center">
                <BedDouble className="mx-auto text-[#173f2a]" size={22} />
                <p className="mt-2 text-sm font-bold">{property.bedrooms}</p>
                <p className="text-xs text-gray-400">Bedrooms</p>
              </div>

              <div className="border-x border-gray-100 text-center">
                <Bath className="mx-auto text-[#173f2a]" size={22} />
                <p className="mt-2 text-sm font-bold">{property.bathrooms}</p>
                <p className="text-xs text-gray-400">Bathrooms</p>
              </div>

              <div className="text-center">
                <Maximize className="mx-auto text-[#173f2a]" size={22} />
                <p className="mt-2 text-sm font-bold">{property.area}</p>
                <p className="text-xs text-gray-400">Sq. Ft.</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#173f2a]">
                About this property
              </h2>

              <p className="mt-4 leading-8 text-gray-500">
                {property.description}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#173f2a]">
                Amenities
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 text-sm text-gray-600"
                  >
                    <span className="text-[#173f2a]">
                      <AmenityIcon name={amenity} />
                    </span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#173f2a]">
                Availability
              </h2>

              <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 p-5">
                <p className="font-semibold text-[#173f2a]">
                  {property.available
                    ? "This property is currently available."
                    : "This property is currently unavailable."}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Contact our team to confirm move-in dates and viewing
                  availability.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 soft-shadow">
              <p className="text-sm text-gray-400">Monthly rent</p>

              <p className="mt-1 text-3xl font-bold text-[#173f2a]">
                ₹{property.price.toLocaleString("en-IN")}
                <span className="text-sm font-normal text-gray-400">
                  /month
                </span>
              </p>

              <div className="my-6 h-px bg-gray-100" />

              <h3 className="text-lg font-bold text-gray-900">
                Interested in this home?
              </h3>

              <form onSubmit={handleBooking} className="mt-5 space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="input-focus w-full rounded-xl border border-gray-200 px-4 py-3 text-sm"
                />

                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="input-focus w-full rounded-xl border border-gray-200 px-4 py-3 text-sm"
                />

                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className="input-focus w-full rounded-xl border border-gray-200 px-4 py-3 text-sm"
                />

                <textarea
                  rows="3"
                  placeholder="Message"
                  className="input-focus w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm"
                />

                <button
                  type="submit"
                  disabled={!property.available}
                  className="w-full rounded-xl bg-[#173f2a] py-3.5 font-semibold text-white transition hover:bg-[#0f2d1d] disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {property.available ? "Contact / Book Now" : "Unavailable"}
                </button>
              </form>

              {bookingMessage && (
                <p className="mt-4 rounded-xl bg-green-50 p-3 text-sm leading-6 text-[#173f2a]">
                  {bookingMessage}
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default PropertyDetails;