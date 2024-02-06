import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@layout/section';
import { Tecnology } from '@lib/definitions';
import { tecnologies } from '@lib/placeholder-data';
import Card from '@ui/card';

const description = `
    En mi camino he forjado una sólida relación con [JavaScript] 
    y [PHP]. En los últimos [3 años], me he especializado en [Angular]. Actualmente, estoy explorando el 
    apasionante mundo de [Node.js].
`;

const filtredTecnologies = tecnologies.filter(t => t.isStack);

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
                        width={42}
                        height={42}
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
            id="stack"
            title='Stack'
            description={description}
        >
            <div className="grid grid-cols-2 gap-3">
                {filtredTecnologies.map((tecnology) => (
                    <CardTecnology key={tecnology.id} tecnology={tecnology} />
                ))}       
            </div>
        </Section>
    );
}