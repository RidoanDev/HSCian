import { BookOpen, Activity, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavBar = ({ activeTab, onTabChange }: BottomNavBarProps) => {
  const tabs = [
    { id: "learn", label: "Learn", icon: BookOpen },
    { id: "practise", label: "Practise", icon: Activity },
    { id: "contact", label: "Community", icon: Users },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border shadow-strong z-50">
      <div className="flex justify-around items-center h-16 px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200",
                "min-w-[60px] text-xs font-medium",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Icon className={cn("h-5 w-5 mb-1", isActive && "text-primary")} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
