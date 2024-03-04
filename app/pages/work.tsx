import { Section } from "@layout/section";
import { WorkExperience } from "@lib/definitions";
import { tecnologiesData, workExperiencesData } from "@lib/placeholder-data";
import Chip from "@ui/chip";

const description = `
    A lo largo de mi carrera, he acumulado una amplia [experiencia] en 
    diversos proyectos y tecnologías. Cada experiencia me ha permitido 
    desarrollar mis [habilidades] y ampliar mis [conocimientos].
`;

function expiranceDates(work: WorkExperience) {
  if (work.current) {
    return <span>{work.startDate} - Activo</span>;
  } else if (work.endDate === work.startDate) {
    return <span>{work.startDate}</span>;
  }

  return (
    <span>
      {work.startDate} - {work.endDate}
    </span>
  );
}

function ChipsTecnologies({
  idWorkedTecnologyList,
}: {
  idWorkedTecnologyList: number[];
}) {
  return (
    <ul className="flex gap-x-2 flex-wrap">
      {tecnologiesData
        .filter((tecnology) => idWorkedTecnologyList.includes(tecnology.id))
        .map((t) => (
          <li key={t.id} className="mb-2">
            <Chip icon={t.icon} name={t.name} color={t.color} />
          </li>
        ))}
    </ul>
  );
}

function FakeDescription() {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function Work() {
  return (
    <Section
      key="work"
      id="work"
      title="Work Experience"
      description={description}
    >
      <ol className="border-l border-neutral-500">
        {workExperiencesData
          .sort((a, b) => b.id - a.id)
          .map((work) => (
            <li key={work.id}>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-gray-800 dark:bg-neutral-500"></div>
                <h4 className="mb-0 text-xl font-semibold">{work.company}</h4>
              </div>
              <div className="mb-6 ml-4">
                <span className="text-xs dark:text-zinc-300">
                  {work.title}, {expiranceDates(work)}
                </span>
                <div className="mt-4 mb-6 text-xs text-zinc-600 dark:text-zinc-400 text-pretty">
                  {work.description ?? <FakeDescription />}
                </div>
                <ChipsTecnologies idWorkedTecnologyList={work.tecnologies} />
              </div>
            </li>
          ))}
      </ol>
    </Section>
  );
}
