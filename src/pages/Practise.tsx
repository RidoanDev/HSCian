import { Brain, Timer, Trophy, Target, Code2, FileCode } from "lucide-react";

export const Practise = () => {
  const practiceItems = [
    {
      icon: Brain,
      title: "MCQ Practice",
      description: "Multiple choice questions",
      color: "bg-blue-100 text-blue-600",
      url: "https://example.com/mcq-practice"
    },
    {
      icon: Timer,
      title: "Timed Tests",
      description: "Practice with time limits",
      color: "bg-green-100 text-green-600",
      url: "https://example.com/timed-tests"
    },
    {
      icon: Trophy,
      title: "Mock Exams",
      description: "Full exam simulations",
      color: "bg-purple-100 text-purple-600",
      url: "https://example.com/mock-exams"
    },
    {
      icon: Target,
      title: "Weak Areas",
      description: "Focus on weak topics",
      color: "bg-orange-100 text-orange-600",
      url: "https://example.com/weak-areas"
    },
    {
      icon: Code2,
      title: "HTML Practice",
      description: "HTML coding exercises",
      color: "bg-cyan-100 text-cyan-600",
      url: "https://example.com/html-practice"
    },
    {
      icon: FileCode,
      title: "C Programming",
      description: "C coding practice",
      color: "bg-indigo-100 text-indigo-600",
      url: "https://thetacode.netlify.app"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* হেডার সেকশন - Contact পেজের মতো */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">Practice Zone</h1>
          <p className="text-gray-600">
            Improve your skills with targeted practice
          </p>
        </div>

        {/* গ্রিড সিস্টেম - প্রতিটি সারিতে ২টি আইটেম */}
        <div className="grid grid-cols-2 gap-4">
          {practiceItems.map((item, index) => {
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
