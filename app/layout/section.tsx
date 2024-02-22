import { PropsWithChildren } from "react";
import TextWithLinks from "@ui/text-with-links";

interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
}

const Title = ({ text }: { text: string }) => {
  return (
    <h1 className="font-bold text-5xl text-center bg-gradient-to-r from-blue-500 dark:from-blue-400 to-cyan-400 dark:to-cyan-400 via-teal-500 dark:via-teal-500 via-40% bg-clip-text text-transparent">
      {text}
    </h1>
  );
};

const Subtitle = ({ text }: { text: string }) => {
  return (
    <h2 className="text-center block leading-relaxed text-2xl font-bold text-gray-800 dark:text-gray-300">
      {text}
    </h2>
  );
};

const Description = ({ text }: { text: string }) => {
  return (
    <p className="text-lg/7 py-6 prose-invert text-center text-zinc-400 leading-relaxed">
      <TextWithLinks>{text}</TextWithLinks>
    </p>
  );
};

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  title,
  description,
  subtitle,
}) => {
  return (
    <section id={id} className="flex flex-col gap-8 md:pt-48 pt-28">
      <div className="flex flex-col gap-1">
        <Title text={title} />
        {subtitle && <Subtitle text={subtitle} />}
      </div>
      {<Description text={description} />}
      {children}
    </section>
  );
};
