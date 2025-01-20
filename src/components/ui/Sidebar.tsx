import { Logo } from "../../icons/logo";
import { Xicon } from "../../icons/Xlogo";
import { YoutubeIcon } from "../../icons/Youtubeicon";
import { SidebarItem } from "./Sidebariteam";

export function Sidebar() {
  return (
    <div className="left-0 top-0 fixed h-screen bg-white border-r-black w-72 pl-4 ">
      <div className="p-4">
        <div className="flex text-3xl pt-3  items-center">
          <div className="pr-4 text-purple-600">
          {<Logo/>}
          </div>
          Brainly
        </div>
        <div className="pt-8 ">
          <SidebarItem text="Twitter" icon={<Xicon />} />
          <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
      </div>
    </div>
  );
}
