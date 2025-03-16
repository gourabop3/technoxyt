import { X } from "lucide-react";
import Logo from "./Logo";
import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinks from "./SocialLinks";
import { useOutsideClick } from "@/lib/hooks";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full bg-darkColor/50 shadow-xl transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-darkColor h-full text-white p-10 border-r border-r-darkRed flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <Logo className="text-white" subClass="group-hover:text-white" />
          <button
            className="hover:text-darkRed hoverEffect cursor-pointer"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide text-white/80">
          {headerData?.map((item) => (
            <Link
              onClick={onClose}
              key={item?.title}
              href={item?.href}
              className={`hover:text-darkRed hoverEffect ${
                pathname === item?.href ? "text-darkRed" : ""
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Sidebar;
