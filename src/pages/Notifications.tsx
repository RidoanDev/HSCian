import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bell, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "update",
      icon: Info,
      title: "New Study Materials Added",
      message: "Physics 2nd Paper chapter notes have been updated with latest syllabus changes.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "success",
      icon: CheckCircle,
      title: "Practice Test Completed",
      message: "Great job! You scored 85% in Chemistry MCQ practice test.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 3,
      type: "warning",
      icon: AlertTriangle,
      title: "Exam Reminder",
      message: "HSC exam registration deadline is approaching. Don't forget to register!",
      time: "3 days ago",
      read: false,
    },
    {
      id: 4,
      type: "info",
      icon: Bell,
      title: "Weekly Progress Report",
      message: "Your study progress report for this week is now available.",
      time: "1 week ago",
      read: true,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-600 bg-green-50";
      case "warning":
        return "text-orange-600 bg-orange-50";
      case "info":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="sticky top-0 z-40 glass-nav px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="btn-premium"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">Notifications</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <Card
              key={notification.id}
              className={`glass-card p-4 ${
                !notification.read ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <div className="flex gap-3">
                <div className={`p-2 rounded-full ${getTypeColor(notification.type)}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-sm leading-tight">
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <Badge variant="secondary" className="text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {notification.time}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}

        {notifications.length === 0 && (
          <Card className="glass-card p-8 text-center">
            <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">No notifications</h3>
            <p className="text-sm text-muted-foreground">
              You're all caught up! New notifications will appear here.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};