import { WorkExperience } from "@lib/definitions";
import { tecnologiesData, workExperiencesData } from "@lib/placeholder-data";
import Chip from "@ui/chip";
import { Section } from "@layout/section";

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
                tecnologiesData
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
            key="work"
            title="Work Experience"
            description={description}
        >
            <ol className="border-l border-neutral-300 dark:border-neutral-500">
                {
                    workExperiencesData.map((work) => (
                        <li key={work.id}>
                            <div className="flex-start flex items-center pt-3">
                                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                <h4 className="mb-0 text-xl font-semibold">{ work.company }</h4>
                            </div>
                            <div className="mb-6 ml-4">
                                <span className="text-sm text-neutral-700 dark:text-neutral-400">
                                    { work.title}, {expiranceDates(work)}
                                </span>
                                <div className="my-4  text-neutral-500 dark:text-neutral-300">
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div> 
                                <ChipsTecnologies idWorkedTecnologyList={work.tecnologies} /> 
                            </div>
                        </li>
                    ))
                }
            </ol>
        </Section>
    );
}
