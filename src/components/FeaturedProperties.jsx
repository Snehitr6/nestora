import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { properties } from "../data/properties";
import PropertyCard from "./PropertyCard";
import SectionTitle from "./SectionTitle";

function FeaturedProperties() {
  const featured = properties.filter((property) => property.featured).slice(0, 4);

  return (
    <section className="section-padding bg-[#f8faf8]">
      <div className="container-width">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Featured homes"
            title="Homes worth coming home to"
            description="Explore our handpicked collection of beautiful rental properties."
          />

          <Link
            to="/properties"
            className="mb-10 inline-flex items-center gap-2 font-semibold text-[#173f2a]"
          >
            View all
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;