import { Menu, Bell, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TopNavBarProps {
  onMenuClick: () => void;
  onNotificationClick: () => void;
}

export const TopNavBar = ({ onMenuClick, onNotificationClick }: TopNavBarProps) => {
  const handleCodeClick = () => {
    window.open("https://ridoan-zisan.netlify.app", "_blank");
  };

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="btn-premium hover:bg-primary/10"
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-2 ml-2">
            <img 
              src="https://i.postimg.cc/c4Hq0rW8/1000019063-removebg-preview.png" 
              alt="HSCian Logo"
              className="h-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onNotificationClick}
            className="btn-premium hover:bg-primary/10"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCodeClick}
            className="btn-premium hover:bg-primary/10"
          >
            <Code className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
