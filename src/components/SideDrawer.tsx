import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideDrawer = ({ isOpen, onClose }: SideDrawerProps) => {
  const handleShare = async () => {
    const shareData = {
      title: 'HSCian',
      text: 'Check out this educational learning platform for HSC students',
      url: 'https://hscian.netlify.app',
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link copied!",
          description: "The URL has been copied to your clipboard.",
        });
      }
    } catch (err) {
      console.error('Error sharing:', err);
      try {
        const textArea = document.createElement('textarea');
        textArea.value = shareData.url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        toast({
          title: "Link copied!",
          description: "The URL has been copied to your clipboard.",
        });
      } catch (fallbackErr) {
        toast({
          title: "Error",
          description: "Failed to share the link. Please try manually.",
          variant: "destructive",
        });
      }
    }
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80 glass-card border-r border-glass-border flex flex-col">
        {/* Top Section - Logo, Name, Slogan, and Share Button */}
        <div>
          <SheetHeader className="text-left">
            <div className="flex flex-col items-center gap-2 mb-4">
              <img 
                src="https://i.postimg.cc/ZRC3J8wM/1000019060-removebg-preview.png" 
                alt="HSCian Logo"
                className="h-20"
              />
              <p className="text-sm text-muted-foreground text-center">
                Your Complete HSC Learning Companion
              </p>
            </div>
          </SheetHeader>

          <Button
            variant="ghost"
            onClick={handleShare}
            className="btn-premium w-full justify-center gap-3 py-3 hover:bg-primary/10 mb-6"
          >
            <Share2 className="h-5 w-5" />
            <span className="font-medium">Share App</span>
          </Button>
        </div>

        {/* Middle Section - App Details */}
        <div className="flex-1 overflow-y-auto">
          <div className="glass-card p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-lg mb-2 text-primary">About HSCian</h3>
            <p className="text-sm text-muted-foreground mb-3">
              A completely non-profit educational initiative designed exclusively 
              for HSC (Higher Secondary Certificate) students in Bangladesh.
            </p>
            
            <h4 className="font-medium text-md mt-4 mb-2 text-primary">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>All-in-one HSC study resources</li>
              <li>Smart Shot preparation</li>
              <li>Subject-wise preparation</li>
              <li>Chapter-wise notes</li>
              <li> HTML and C program compiler</li>
            </ul>

            <h4 className="font-medium text-md mt-4 mb-2 text-primary">Our Mission:</h4>
            <p className="text-sm text-muted-foreground">
              To provide free, high-quality educational resources to all HSC students 
              regardless of their economic background, helping them achieve academic 
              excellence.
            </p>
          </div>
        </div>

        {/* Bottom Section - Version Info */}
        <div className="glass-card p-3 rounded-lg text-center mt-auto">
          <p className="text-sm text-muted-foreground">
            Version ∞
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
