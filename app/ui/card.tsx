import { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="overflow-hidden relative duration-700 rounded-xl bg-zinc-800/10 group md:gap-8 border-zinc-400/50 border dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 p-1 text-xs text-neutral-900 dark:hover:text-neutral-100 no-underline">
      {children}
    </div>
  );
};

export default Card;
