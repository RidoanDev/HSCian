import { Youtube, Facebook, Users, MessageSquare, BookOpen } from "lucide-react";

export const Contact = () => {
  const communityGroups = [
    {
      icon: Youtube,
      title: "YouTube Channel",
      description: "Subscribe for video lessons",
      color: "bg-red-100 text-red-600",
      url: "https://youtube.com/@HSCian"
    },
    {
      icon: Facebook,
      title: "Facebook Page", 
      description: "Get updates and announcements",
      color: "bg-blue-100 text-blue-600",
      url: "https://facebook.com/hscianX"
    },
    {
      icon: Users,
      title: "Facebook Group",
      description: "Join student discussions",
      color: "bg-green-100 text-green-600",
      url: "https://facebook.com/groups/hscianX"
    },
    {
      icon: BookOpen,
      title: "Telegram Group",
      description: "Share study materials",
      color: "bg-cyan-100 text-cyan-600",
      url: "https://t.me/01712525910"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Group",
      description: "Instant study help",
      color: "bg-emerald-100 text-emerald-600",
      url: "https://wa.me/01712525910"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">HSC Community</h1>
          <p className="text-gray-600">
            Connect with fellow students and study groups
          </p>
        </div>

        {/* Grid System - 2 items per row */}
        <div className="grid grid-cols-2 gap-4">
          {communityGroups.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`aspect-square flex flex-col items-center justify-center rounded-lg ${item.color} p-4 hover:shadow-md transition-all`}
              >
                <Icon className="h-8 w-8 mb-2" />
                <h3 className="font-semibold text-center">{item.title}</h3>
                <p className="text-xs text-center mt-1 opacity-80">{item.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
