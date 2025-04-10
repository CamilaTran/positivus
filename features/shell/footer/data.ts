import LinkedIcon from "@/components/icons/linked-icon";

import FacebookIcon from "@/components/icons/facebook-icon";

import XIcon from "@/components/icons/x-icon";

interface App {
  href: string;
  name: string;
  icon: React.ElementType;
}
const socialList: Array<App> = [
  {
    href: "#",
    name: "linked",
    icon: LinkedIcon,
  },
  {
    href: "#",
    name: "facebook",
    icon: FacebookIcon,
  },
  {
    href: "#",
    name: "x",
    icon: XIcon,
  },
];

export { socialList };
