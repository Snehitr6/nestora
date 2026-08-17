function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#7c9d89]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[#173f2a] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-gray-500">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;