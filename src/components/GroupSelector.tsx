import { Button } from "@/components/ui/button";

interface GroupSelectorProps {
  activeGroup: string;
  onGroupChange: (group: string) => void;
}

export const GroupSelector = ({ activeGroup, onGroupChange }: GroupSelectorProps) => {
  const groups = [
    { id: "science", label: "বিজ্ঞান" },
    { id: "humanities", label: "মানবিক" },
    { id: "commerce", label: "বাণিজ্য" },
  ];

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm px-4 py-3 border-b border-border/50">
      <div className="flex rounded-lg bg-muted/50 p-1 gap-1">
        {groups.map((group) => (
          <Button
            key={group.id}
            variant={activeGroup === group.id ? "default" : "ghost"}
            onClick={() => onGroupChange(group.id)}
            className={`flex-1 flex items-center gap-2 ${
              activeGroup === group.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-background/50"
            }`}
            aria-current={activeGroup === group.id ? "page" : undefined}
          >
            {group.emoji && <span className="text-lg">{group.emoji}</span>}
            <span className="text-sm font-medium">{group.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
