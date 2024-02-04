import { workExperiences, tecnologies } from "../lib/placeholder-data";

import {Title} from '@ui/title';
import Chip from '../ui/chip';
import { Section } from "../ui/section";

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
        <Section>
            <Title text='Work Experience'/>
            <p className="prose prose-neutral dark:prose-invert text-center text-pretty dark:text-gray-400 text-gray-600">
                On a mission to build products developers love, and along the way, teach the next generation of developers. Here`s a summary of my work so far.
            </p>
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
                                { work.title} , { work.startDate } - { work.current ? 'Current' : work.endDate}
                            </span>
                            <p className="my-4  text-neutral-500 dark:text-neutral-300">
                               { work.description }
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
