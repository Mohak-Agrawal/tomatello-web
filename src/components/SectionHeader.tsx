const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div className="section-header flex flex-col items-center gap-4 text-center pb-8">
    <h2>{title}</h2>
    <p className="text-base italic font-light text-gray-600 max-w-lg">
      {subtitle}
    </p>
  </div>
);

export default SectionHeader;
