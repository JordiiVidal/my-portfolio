import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa6";

import Link from "next/link";

export interface ButtonLinkProps {
  text: string;
  icon: string;
  link: string;
}

function customIcon(icon: string) {
  switch (icon) {
    case "github":
      return <FaGithub />;
    case "linkedin":
      return <FaLinkedinIn />;
    default:
      return <FaRegFilePdf />;
  }
}

const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  return (
    <div className="group">
      <Link
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="border dark:border-neutral-700 rounded flex items-center justify-between px-4 py-2 w-full gap-x-4"
      >
        <div className="flex items-center	gap-5">
          {customIcon(props.icon)}
          <p className="font-normal dark:text-neutral-100">{props.text}</p>
        </div>
        <RiArrowRightUpLine className="text-black dark:text-neutral-300" />
      </Link>
    </div>
  );
};

export default ButtonLink;
