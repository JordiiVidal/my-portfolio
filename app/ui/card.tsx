import { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="overflow-hidden relative duration-700 rounded-xl bg-zinc-200/20 dark:bg-zinc-800/10 group md:gap-8 border border-zinc-200 dark:border-zinc-600 hover:bg-zinc-400/10 dark:hover:bg-zinc-400/10 p-1">
      {children}
    </div>
  );
};

export default Card;
