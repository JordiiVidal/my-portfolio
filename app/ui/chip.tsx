import Image from "next/image";
import { CSSProperties } from "react";

const opacityHex = "36";

function customStyle(color: string): CSSProperties {
  return {
    backgroundColor: color + opacityHex,
  };
}

export default function Chip({
  icon,
  name,
  color,
}: {
  icon: string;
  name: string;
  color: string;
}) {
  const style = customStyle(color);

  return (
    <span
      className={`flex gap-x-2 rounded-full text-xxs text-white py-1 px-2`}
      style={style}
    >
      <Image
        src={`/icons/${icon}`}
        className="rounded-full mr-2"
        alt={`${name}'s profile picture`}
        width={16}
        height={16}
      />
      {name}
    </span>
  );
}
