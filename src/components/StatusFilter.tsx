
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface StatusFilterProps {
  currentStatus: string | null;
  onStatusChange: (status: string | null) => void;
}

const statuses = [
  { value: null, label: "All" },
  { value: "active", label: "Active" },
  { value: "planning", label: "Planning" },
  { value: "paused", label: "Paused" },
  { value: "archived", label: "Archived" },
];

export function StatusFilter({ currentStatus, onStatusChange }: StatusFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <Button
          key={status.label}
          variant={currentStatus === status.value ? "default" : "outline"}
          size="sm"
          onClick={() => onStatusChange(status.value)}
          className={cn(
            "text-xs h-7",
            currentStatus === status.value && status.value === "active" && "bg-green-600 hover:bg-green-700",
            currentStatus === status.value && status.value === "planning" && "bg-blue-600 hover:bg-blue-700",
            currentStatus === status.value && status.value === "paused" && "bg-amber-600 hover:bg-amber-700",
            currentStatus === status.value && status.value === "archived" && "bg-gray-600 hover:bg-gray-700"
          )}
        >
          {status.label}
        </Button>
      ))}
    </div>
  );
}
