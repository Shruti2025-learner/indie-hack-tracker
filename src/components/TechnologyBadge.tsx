
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface TechnologyBadgeProps {
  name: string;
  color?: string;
  className?: string;
}

export function TechnologyBadge({ name, color, className }: TechnologyBadgeProps) {
  return (
    <Badge 
      variant="outline" 
      className={cn(
        "bg-secondary border-border text-sm py-0.5",
        className
      )}
      style={{
        borderLeftColor: color || 'currentColor',
        borderLeftWidth: '3px',
      }}
    >
      {name}
    </Badge>
  );
}
