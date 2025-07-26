import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Beaker, Microscope, Globe, Users, TrendingUp, BarChart3, Brain, Landmark, History, TreePine, Heart, Lightbulb, Monitor, Languages, Building, CreditCard, DollarSign, Atom, FlaskConical, Dna, Calculator as MathIcon, PieChart, Coins, Building2, TrendingDown, Briefcase, MapPin, Clock, Fuel as Mosque, Scale, HeartHandshake, UserCheck, Wheat, Sprout, BookText, Pen, Code } from "lucide-react";

interface SubjectGridProps {
  group: string;
}

interface Subject {
  id: string;
  name: string;
  mainSubject: string;
  paper: string;
  icon: any;
}

export const SubjectGrid = ({ group }: SubjectGridProps) => {
  const navigate = useNavigate();

  const getSubjectIcon = (subject: string) => {
    if (subject.includes("Bangla")) return Languages;
    if (subject.includes("English")) return BookOpen;
    if (subject.includes("ICT")) return Monitor;
    if (subject.includes("Physics")) return Calculator;
    if (subject.includes("Chemistry")) return Beaker;
    if (subject.includes("Biology")) return Microscope;
    if (subject.includes("Higher Math")) return Calculator;
    if (subject.includes("Statistics")) return BarChart3;
    if (subject.includes("Economics")) return TrendingUp;
    if (subject.includes("Civics")) return Landmark;
    if (subject.includes("Islamic History")) return History;
    if (subject.includes("History")) return History;
    if (subject.includes("Geography")) return Globe;
    if (subject.includes("Psychology")) return Brain;
    if (subject.includes("Logic")) return Lightbulb;
    if (subject.includes("Social Work")) return Users;
    if (subject.includes("Sociology")) return Users;
    if (subject.includes("Islamic Studies")) return BookOpen;
    if (subject.includes("Agriculture")) return TreePine;
    if (subject.includes("Agricultural Education")) return TreePine;
    if (subject.includes("Accounting")) return CreditCard;
    if (subject.includes("Management")) return Building;
    if (subject.includes("Finance")) return DollarSign;
    if (subject.includes("Marketing")) return TrendingUp;
    return BookOpen;
  };

  const subjects: Record<string, Subject[]> = {
    science: [
      { id: "bangla_1st", name: "Bangla 1st Paper", mainSubject: "Bangla", paper: "1st Paper", icon: Languages },
      { id: "bangla_2nd", name: "Bangla 2nd Paper", mainSubject: "Bangla", paper: "2nd Paper", icon: Languages },
      { id: "english_1st", name: "English 1st Paper", mainSubject: "English", paper: "1st Paper", icon: BookOpen },
      { id: "english_2nd", name: "English 2nd Paper", mainSubject: "English", paper: "2nd Paper", icon: BookOpen },
      { id: "ict", name: "ICT", mainSubject: "ICT", paper: "", icon: Monitor },
      { id: "physics_1st", name: "Physics 1st Paper", mainSubject: "Physics", paper: "1st Paper", icon: Calculator },
      { id: "physics_2nd", name: "Physics 2nd Paper", mainSubject: "Physics", paper: "2nd Paper", icon: Calculator },
      { id: "chemistry_1st", name: "Chemistry 1st Paper", mainSubject: "Chemistry", paper: "1st Paper", icon: Beaker },
      { id: "chemistry_2nd", name: "Chemistry 2nd Paper", mainSubject: "Chemistry", paper: "2nd Paper", icon: Beaker },
      { id: "biology_1st", name: "Biology 1st Paper", mainSubject: "Biology", paper: "1st Paper", icon: Microscope },
      { id: "biology_2nd", name: "Biology 2nd Paper", mainSubject: "Biology", paper: "2nd Paper", icon: Microscope },
      { id: "higher_math_1st", name: "Higher Math 1st Paper", mainSubject: "Higher Math", paper: "1st Paper", icon: Calculator },
      { id: "higher_math_2nd", name: "Higher Math 2nd Paper", mainSubject: "Higher Math", paper: "2nd Paper", icon: Calculator },
      { id: "statistics_1st", name: "Statistics 1st Paper", mainSubject: "Statistics", paper: "1st Paper", icon: BarChart3 },
      { id: "statistics_2nd", name: "Statistics 2nd Paper", mainSubject: "Statistics", paper: "2nd Paper", icon: BarChart3 },
    ],
    humanities: [
      { id: "bangla_1st", name: "Bangla 1st Paper", mainSubject: "Bangla", paper: "1st Paper", icon: Languages },
      { id: "bangla_2nd", name: "Bangla 2nd Paper", mainSubject: "Bangla", paper: "2nd Paper", icon: Languages },
      { id: "english_1st", name: "English 1st Paper", mainSubject: "English", paper: "1st Paper", icon: BookOpen },
      { id: "english_2nd", name: "English 2nd Paper", mainSubject: "English", paper: "2nd Paper", icon: BookOpen },
      { id: "ict", name: "ICT", mainSubject: "ICT", paper: "", icon: Monitor },
      { id: "economics_1st", name: "Economics 1st Paper", mainSubject: "Economics", paper: "1st Paper", icon: TrendingUp },
      { id: "economics_2nd", name: "Economics 2nd Paper", mainSubject: "Economics", paper: "2nd Paper", icon: TrendingUp },
      { id: "civics_1st", name: "Civics 1st Paper", mainSubject: "Civics", paper: "1st Paper", icon: Landmark },
      { id: "civics_2nd", name: "Civics 2nd Paper", mainSubject: "Civics", paper: "2nd Paper", icon: Landmark },
      { id: "islamic_history_1st", name: "Islamic History 1st Paper", mainSubject: "Islamic History", paper: "1st Paper", icon: History },
      { id: "islamic_history_2nd", name: "Islamic History 2nd Paper", mainSubject: "Islamic History", paper: "2nd Paper", icon: History },
      { id: "history_1st", name: "History 1st Paper", mainSubject: "History", paper: "1st Paper", icon: History },
      { id: "history_2nd", name: "History 2nd Paper", mainSubject: "History", paper: "2nd Paper", icon: History },
      { id: "geography_1st", name: "Geography 1st Paper", mainSubject: "Geography", paper: "1st Paper", icon: Globe },
      { id: "geography_2nd", name: "Geography 2nd Paper", mainSubject: "Geography", paper: "2nd Paper", icon: Globe },
      { id: "psychology_1st", name: "Psychology 1st Paper", mainSubject: "Psychology", paper: "1st Paper", icon: Brain },
      { id: "psychology_2nd", name: "Psychology 2nd Paper", mainSubject: "Psychology", paper: "2nd Paper", icon: Brain },
      { id: "logic_1st", name: "Logic 1st Paper", mainSubject: "Logic", paper: "1st Paper", icon: Lightbulb },
      { id: "logic_2nd", name: "Logic 2nd Paper", mainSubject: "Logic", paper: "2nd Paper", icon: Lightbulb },
      { id: "social_work_1st", name: "Social Work 1st Paper", mainSubject: "Social Work", paper: "1st Paper", icon: Users },
      { id: "social_work_2nd", name: "Social Work 2nd Paper", mainSubject: "Social Work", paper: "2nd Paper", icon: Users },
      { id: "sociology_1st", name: "Sociology 1st Paper", mainSubject: "Sociology", paper: "1st Paper", icon: Users },
      { id: "sociology_2nd", name: "Sociology 2nd Paper", mainSubject: "Sociology", paper: "2nd Paper", icon: Users },
      { id: "islamic_studies_1st", name: "Islamic Studies 1st Paper", mainSubject: "Islamic Studies", paper: "1st Paper", icon: BookOpen },
      { id: "islamic_studies_2nd", name: "Islamic Studies 2nd Paper", mainSubject: "Islamic Studies", paper: "2nd Paper", icon: BookOpen },
      { id: "agriculture_1st", name: "Agriculture 1st Paper", mainSubject: "Agriculture", paper: "1st Paper", icon: TreePine },
      { id: "agriculture_2nd", name: "Agriculture 2nd Paper", mainSubject: "Agriculture", paper: "2nd Paper", icon: TreePine },
    ],
    commerce: [
      { id: "bangla_1st", name: "Bangla 1st Paper", mainSubject: "Bangla", paper: "1st Paper", icon: Languages },
      { id: "bangla_2nd", name: "Bangla 2nd Paper", mainSubject: "Bangla", paper: "2nd Paper", icon: Languages },
      { id: "english_1st", name: "English 1st Paper", mainSubject: "English", paper: "1st Paper", icon: BookOpen },
      { id: "english_2nd", name: "English 2nd Paper", mainSubject: "English", paper: "2nd Paper", icon: BookOpen },
      { id: "ict", name: "ICT", mainSubject: "ICT", paper: "", icon: Monitor },
      { id: "accounting_1st", name: "Accounting 1st Paper", mainSubject: "Accounting", paper: "1st Paper", icon: CreditCard },
      { id: "accounting_2nd", name: "Accounting 2nd Paper", mainSubject: "Accounting", paper: "2nd Paper", icon: CreditCard },
      { id: "management_1st", name: "Management 1st Paper", mainSubject: "Management", paper: "1st Paper", icon: Building },
      { id: "management_2nd", name: "Management 2nd Paper", mainSubject: "Management", paper: "2nd Paper", icon: Building },
      { id: "finance_banking_1st", name: "Finance 1st Paper", mainSubject: "Finance", paper: "1st Paper", icon: DollarSign },
      { id: "finance_banking_2nd", name: "Finance 2nd Paper", mainSubject: "Finance", paper: "2nd Paper", icon: DollarSign },
      { id: "marketing_1st", name: "Marketing 1st Paper", mainSubject: "Marketing", paper: "1st Paper", icon: TrendingUp },
      { id: "marketing_2nd", name: "Marketing 2nd Paper", mainSubject: "Marketing", paper: "2nd Paper", icon: TrendingUp },
      { id: "agricultural_education_1st", name: "Agricultural Education 1st Paper", mainSubject: "Agricultural", paper: "1st Paper", icon: TreePine },
      { id: "agricultural_education_2nd", name: "Agricultural Education 2nd Paper", mainSubject: "Agricultural", paper: "2nd Paper", icon: TreePine },
      { id: "economics_1st", name: "Economics 1st Paper", mainSubject: "Economics", paper: "1st Paper", icon: TrendingUp },
      { id: "economics_2nd", name: "Economics 2nd Paper", mainSubject: "Economics", paper: "2nd Paper", icon: TrendingUp },
      { id: "statistics_1st", name: "Statistics 1st Paper", mainSubject: "Statistics", paper: "1st Paper", icon: BarChart3 },
      { id: "statistics_2nd", name: "Statistics 2nd Paper", mainSubject: "Statistics", paper: "2nd Paper", icon: BarChart3 },
    ],
  };

  const currentSubjects = subjects[group] || [];

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/subject/${subjectId}`);
  };

  const getGroupClass = () => {
    switch (group) {
      case "science":
        return "subject-science";
      case "humanities":
        return "subject-humanities";
      case "commerce":
        return "subject-commerce";
      default:
        return "subject-science";
    }
  };

  return (
    <div className="p-4 pb-20">
      <div className="grid grid-cols-3 gap-3">
        {currentSubjects.map((subject) => {
          const Icon = subject.icon;
          return (
            <Button
              key={subject.id}
              variant="ghost"
              onClick={() => handleSubjectClick(subject.id)}
              className={`btn-premium ${getGroupClass()} h-auto p-4 flex flex-col items-center gap-3 hover:scale-105 hover:shadow-md`}
            >
              <Icon className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="text-sm font-semibold text-foreground leading-tight">
                  {subject.mainSubject}
                </div>
                {subject.paper && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {subject.paper}
                  </div>
                )}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
