import { ReactElement } from "react";

interface SidebarItemProps {
    text: string;
    icon: ReactElement;
  }
  
  export function SidebarItem({ text, icon }: SidebarItemProps) {
    return (
      <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 cursor-pointer">
        <div className="icon">{icon}</div>
        <div className="text">{text}</div>
      </div>
    );
  }
  