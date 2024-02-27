import { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="overflow-hidden relative duration-700 rounded-xl bg-zinc-800/10 group md:gap-8 border border-zinc-600 hover:bg-zinc-400/10 p-1 text-xs text-neutral-900 font-semibold hover:text-neutral-100 no-underline">
      {children}
    </div>
  );
};

export default Card;
