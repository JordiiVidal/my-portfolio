import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@layout/section';
import { Category, Tecnology } from '@lib/definitions';
import { tecnologiesData } from '@lib/placeholder-data';
import Card from '@ui/card';

const description = `
    En mi camino he forjado una sólida relación con [JavaScript] 
    y [PHP]. En los últimos [3 años], me he especializado en [Angular]. Actualmente, estoy explorando el 
    apasionante mundo de [Node.js].
`;

const filtredTecnologies = (category: Category) => tecnologiesData.filter(t => t.isStack && t.category === category);

function CardTecnology({tecnology} : {tecnology: Tecnology}){
    return ( 
        <Card>
            <Link
                href="#"
            >
                <article className="p-5 flex flex-col items-center align-middle">
                    <Image 
                        alt={tecnology.name}
                        src={`/icons/${tecnology.icon}`}
                        height={0}
                        width={0}
                        style={{width:'42px', height: "auto" }}
                    />
                    <p className="z-20 mt-5 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {tecnology.name}
                    </p>
                </article>
            </Link>
        </Card>
    );
}

export default function Stack(){
    return (
        <Section 
            key="stack"
            title='Stack'
            description={description}
        >
            <span>Frontend</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                {filtredTecnologies(Category.FRONTEND).map((tecnology) => (
                    <CardTecnology key={tecnology.id} tecnology={tecnology} />
                ))}       
            </div>
            <span>Backend</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                {filtredTecnologies(Category.BACKEND).map((tecnology) => (
                    <CardTecnology key={tecnology.id} tecnology={tecnology} />
                ))}       
            </div>
        </Section>
    );
}