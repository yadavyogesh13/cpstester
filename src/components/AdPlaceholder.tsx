interface AdPlaceholderProps {
  size: "banner" | "rectangle" | "leaderboard";
  className?: string;
}

const sizeClasses = {
  banner: "h-[90px] w-full max-w-[728px]",
  rectangle: "h-[250px] w-full max-w-[300px]",
  leaderboard: "h-[90px] w-full",
};

export function AdPlaceholder({ size, className = "" }: AdPlaceholderProps) {
  return (
    <div 
      className={`flex items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 ${sizeClasses[size]} ${className}`}
      role="complementary"
      aria-label="Advertisement"
    >
      <span className="text-xs text-muted-foreground">Advertisement</span>
    </div>
  );
}
