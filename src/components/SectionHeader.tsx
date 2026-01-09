interface SectionHeaderProps {
  number: string;
  label: string;
}

export const SectionHeader = ({ number, label }: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-serif text-xs text-primary/50">{number}</span>
      <span className="font-handwritten text-lg text-primary">{label}</span>
      <span className="flex-1 h-[1px] bg-primary/20" />
    </div>
  );
};
