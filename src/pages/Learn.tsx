import { useState } from "react";
import { GroupSelector } from "@/components/GroupSelector";
import { SubjectGrid } from "@/components/SubjectGrid";

export const Learn = () => {
  const [activeGroup, setActiveGroup] = useState("science");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <GroupSelector activeGroup={activeGroup} onGroupChange={setActiveGroup} />
      <SubjectGrid group={activeGroup} />
    </div>
  );
};