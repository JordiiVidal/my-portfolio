import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@layout/section';
import { Tecnology } from '@lib/definitions';
import { tecnologies } from '@lib/placeholder-data';
import { Card } from '@ui/card';
import { Title } from '@ui/title';

const filtredTecnologies = tecnologies.filter(t => t.isStack);

function CardTecnology({tecnology} : {tecnology: Tecnology}){
    return ( 
        <Card>
            <Link
                href="#">
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
        <Section>
            <Title text='Stack'/>
            <p className="prose prose-neutral dark:prose-invert text-center text-pretty dark:text-gray-400 text-gray-600">
                On a mission to build products developers love, and along the way, teach the next generation of developers. Here`s a summary of my work so far.
            </p>
            <div className="grid grid-cols-2 gap-4 mx-4 lg:grid-cols-4">
                {filtredTecnologies.map((tecnology) => (
                    <CardTecnology key={tecnology.id} tecnology={tecnology} />
                ))}       
            </div>
        </Section>
    );
}