interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="flex flex-col items-center text-center mb-10">
    <h2 className="text-xl tracking-[0.2em] uppercase tracking-wide text-[#252525]">
      {title}
    </h2>

    {subtitle && (
      <p className="mt-4 text-sm text-gray-400 italic max-w-md leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
