import { Users, MessageSquare, BookOpen, HelpCircle, ExternalLink, Heart } from "lucide-react";

export const Contact = () => {
  const communityGroups = [
    {
      icon: Users,
      title: "Science Group",
      description: "Connect with science students",
      color: "bg-blue-100 text-blue-600",
      url: "https://facebook.com/groups/science-group"
    },
    {
      icon: Users,
      title: "Humanities Group", 
      description: "Join humanities discussions",
      color: "bg-green-100 text-green-600",
      url: "https://facebook.com/groups/humanities-group"
    },
    {
      icon: Users,
      title: "Commerce Group",
      description: "Business studies support",
      color: "bg-purple-100 text-purple-600",
      url: "https://facebook.com/groups/commerce-group"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Help",
      description: "Instant study help",
      color: "bg-emerald-100 text-emerald-600",
      url: "https://wa.me/yourgroup"
    },
    {
      icon: BookOpen,
      title: "Telegram Resources",
      description: "Share study materials",
      color: "bg-cyan-100 text-cyan-600",
      url: "https://t.me/yourchannel"
    },
    {
      icon: HelpCircle,
      title: "Discord Q&A",
      description: "Ask questions, get answers",
      color: "bg-indigo-100 text-indigo-600",
      url: "https://discord.gg/yourserver"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* হেডার সেকশন */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">HSC Community</h1>
          <p className="text-gray-600">
            Connect with fellow students and study groups
          </p>
        </div>

        {/* গ্রিড সিস্টেম - প্রতিটি সারিতে ২টি আইটেম */}
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
