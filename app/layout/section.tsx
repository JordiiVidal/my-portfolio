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
    <h1 className="font-bold md:text-5xl text-3xl text-center bg-gradient-to-r from-blue-400 to-cyan-400 via-teal-500 via-40% bg-clip-text text-transparent">
      {text}
    </h1>
  );
};

const Subtitle = ({ text }: { text: string }) => {
  return (
    <h2 className="text-center block leading-relaxed md:text-2xl text-xl font-bold text-gray-300">
      {text}
    </h2>
  );
};

const Description = ({ text }: { text: string }) => {
  return (
    <p className="md:text-lg/7 text-sm py-6 prose-invert text-center text-zinc-400">
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
