import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export default function SideBar() {
   return (
      <div className="sidebar">
         <FaFire size="28" />
         <SideBarIcon icon={<FaFire size="28" />} />
         <SideBarIcon icon={<BsPlus size="32" />} />
         <SideBarIcon icon={<BsFillLightningFill size="20" />} />
         <SideBarIcon icon={<FaPoo size="20" />} />
      </div>
   );
}

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
   <div className="sidebar-icon group">
      {icon}
      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
   </div>
);
