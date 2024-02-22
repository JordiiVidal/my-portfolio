import Image from "next/image";

import { Section } from "@layout/section";
import { Category, Tecnology } from "@lib/definitions";
import { tecnologiesData } from "@lib/placeholder-data";
import Card from "@ui/card";

const description = `
    En mi camino he forjado una sólida relación con [JavaScript] 
    y [PHP]. En los últimos [3 años], me he especializado en [Angular]. Actualmente, estoy explorando el 
    apasionante mundo de [Node.js].
`;

const filtredTecnologies = (category: Category) =>
  tecnologiesData.filter((t) => t.isStack && t.category === category);

function GridTecnologies(category: Category) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
      {filtredTecnologies(category).map((tecnology) => (
        <CardTecnology key={tecnology.id} tecnology={tecnology} />
      ))}
    </div>
  );
}

function CardTecnology({ tecnology }: { tecnology: Tecnology }) {
  return (
    <Card>
      <article className="p-5 flex flex-col items-center align-middle cursor-default">
        <Image
          alt={tecnology.name}
          src={`/icons/${tecnology.icon}`}
          height={0}
          width={0}
          style={{ width: "42px", height: "auto" }}
          loading="eager"
          aria-label={tecnology.name}
        />
        <p className="z-20 mt-5 text-xs  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {tecnology.name}
        </p>
      </article>
    </Card>
  );
}

export function Stack() {
  return (
    <Section key="stack" id="stack" title="Stack" description={description}>
      <span>Frontend</span>
      {GridTecnologies(Category.FRONTEND)}
      <span>Backend</span>
      {GridTecnologies(Category.BACKEND)}
      <span>Tools</span>
      {GridTecnologies(Category.TOOLS)}
    </Section>
  );
}
