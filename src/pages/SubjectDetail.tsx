import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  FileText,
  Video,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { subjectDatabase } from '@/data/subjectData';

interface SubjectCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  id: string;
}

export const SubjectDetail = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const subject = subjectDatabase[subjectId || ''];

  const categories: SubjectCategory[] = [
    {
      id: 'syllabus',
      icon: BookOpen,
      title: 'সিলেবাস',
      description: 'সম্পূর্ণ পাঠ্যক্রম ও বিষয়বস্তু',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      id: 'markedBooks',
      icon: Bookmark,
      title: 'দাগানো বই',
      description: 'প্রস্তাবিত পাঠ্যবই ও গাইড',
      color: 'bg-green-50 border-green-200',
    },
    {
      id: 'chapterClasses',
      icon: Video,
      title: 'অধ্যায়ভিত্তিক ক্লাস',
      description: ' ওয়ান শর্ট ভিডিও',
      color: 'bg-orange-50 border-orange-200',
    },
    {
      id: 'chapterNotes',
      icon: FileText,
      title: 'অধ্যায়ভিত্তিক নোট',
      description: 'বিস্তারিত নোট ও সারাংশ',
      color: 'bg-purple-50 border-purple-200',
    },
  ];

  if (!subject) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <Card className="p-6 text-center max-w-md w-full shadow-lg">
          <h2 className="text-xl font-bold mb-4">বিষয় খুঁজে পাওয়া যায়নি</h2>
          <p className="text-gray-600 mb-4">
            দুঃখিত, এই বিষয়ের তথ্য এখনো যোগ করা হয়নি। শীঘ্রই আপডেট করা হবে।
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Subject ID: {subjectId}
          </p>
          <Button onClick={() => navigate(-1)} className="w-full">
            ফিরে যান
          </Button>
        </Card>
      </div>
    );
  }

  const handleCategoryClick = (categoryId: string) => {
    const url = subject.urls?.[categoryId as keyof typeof subject.urls];
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log(`No URL found for ${categoryId} in subject ${subjectId}`);
      // You can show a toast or alert here if needed
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b p-4 shadow-sm">
        <div className="flex items-center gap-3 max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">
              {subject.mainSubject}
            </h1>
            {subject.paper && (
              <p className="text-sm text-gray-500">{subject.paper}</p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-4xl mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const hasUrl = subject.urls?.[category.id as keyof typeof subject.urls];
            return (
              <Card
                key={category.id}
                className={`p-4 transition-all duration-300 ${category.color} border rounded-xl shadow-sm hover:shadow-md cursor-pointer hover:scale-105 ${
                  !hasUrl ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  {!hasUrl && (
                    <p className="text-xs text-gray-400 mt-2">শীঘ্রই আসছে</p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
