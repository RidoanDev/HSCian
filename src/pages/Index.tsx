import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopNavBar } from "@/components/TopNavBar";
import { BottomNavBar } from "@/components/BottomNavBar";
import { SideDrawer } from "@/components/SideDrawer";
import { Learn } from "./Learn";
import { Practise } from "./Practise";
import { Contact } from "./Contact";

const Index = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "learn":
        return <Learn />;
      case "practise":
        return <Practise />;
      case "contact":
        return <Contact />;
      default:
        return <Learn />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <TopNavBar
        onMenuClick={() => setSideDrawerOpen(true)}
        onNotificationClick={handleNotificationClick}
      />
      
      <main className="relative">
        {renderActiveTab()}
      </main>
      
      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <SideDrawer
        isOpen={sideDrawerOpen}
        onClose={() => setSideDrawerOpen(false)}
      />
    </div>
  );
};

export default Index;
