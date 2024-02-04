import { Section } from "@layout/section";
import { WorkExperience } from "@lib/definitions";
import { tecnologies, workExperiences } from "@lib/placeholder-data";
import Chip from '@ui/chip';
import { Title } from '@ui/title';
import TextWithLinks from "../ui/text-with-links";

const description = `
    A lo largo de mi carrera, he acumulado una amplia [experiencia] en 
    diversos proyectos y tecnologías. Cada experiencia me ha permitido 
    desarrollar mis [habilidades] y ampliar mis [conocimientos].
`;

function expiranceDates(work: WorkExperience){
    if (work.current){
        return (<span>{ work.startDate } - Activo</span>)
    } else if (work.endDate === work.startDate){
        return (<span>{work.startDate}</span>)
    }

    return (<span>{work.startDate} - {work.endDate}</span>)
}

function ChipsTecnologies({ idWorkedTecnologyList } : {idWorkedTecnologyList : number[]}){
    return (
        <ul className="flex gap-x-2 flex-wrap">
            {
                tecnologies
                    .filter((tecnology) => idWorkedTecnologyList.includes(tecnology.id))
                    .map(t => (
                        <li key={t.id} className="mb-2">
                            <Chip icon={t.icon} name={t.name} color={t.color}/>
                        </li>
                    ))
            }
        </ul>
    )
}

export default function Work(){
    return (
        <Section 
            id="work"
            title="Work Experience"
            description={description}
        >
            <ol className="border-l border-neutral-300 dark:border-neutral-500">
                {
                    workExperiences.map((work) => (
                        <li key={work.id}>
                        <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            <h4 className="mb-0 text-xl font-semibold">{ work.company }</h4>
                        </div>
                        <div className="mb-6 ml-4">
                            <span className="text-sm text-neutral-700 dark:text-neutral-400">
                                { work.title}, {expiranceDates(work)}
                            </span>
                            <p className="my-4  text-neutral-500 dark:text-neutral-300">
                               {/* { work.description } */}
                            </p> 
                            <ChipsTecnologies idWorkedTecnologyList={work.tecnologies} /> 
                        </div>
                    </li>
                    ))
                }
            </ol>
        </Section>
    );
}
