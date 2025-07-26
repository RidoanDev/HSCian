import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDeferredPrompt(null);
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative p-6">
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
          
          <div className="text-center">
            <div className="mb-4">
              <img 
                src="https://i.postimg.cc/BQP7QDjk/HSCian-20250725-225238-0000.png" 
                alt="HSCian Logo"
                className="h-16 w-16 mx-auto rounded-2xl shadow-lg"
              />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              HSCian অ্যাপ ইনস্টল করুন
            </h3>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              আপনার ডিভাইসে HSCian অ্যাপ ইনস্টল করুন এবং সহজেই অ্যাক্সেস করুন।
            </p>
            
            <div className="flex gap-3">
              <Button
                onClick={handleDismiss}
                variant="outline"
                className="flex-1 py-3 text-gray-700 border-gray-300 hover:bg-gray-50"
              >
                বাতিল
              </Button>
              
              <Button
                onClick={handleInstallClick}
                className="flex-1 py-3 bg-primary hover:bg-primary/90 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                ইনস্টল
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
