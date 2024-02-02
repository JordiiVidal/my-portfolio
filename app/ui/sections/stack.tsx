import Image from 'next/image';
import Title from '@ui/title';
import { Tecnology } from '@/app/lib/definitions';

export default function Stack({tecnologies = []} : {tecnologies: Tecnology[]}){
    return (
        <section className='pt-6 lg:pt-12 flex flex-col gap-6'>
            <Title text='Stack'/>
            <p className="prose prose-neutral dark:prose-invert text-center text-pretty dark:text-gray-400 text-gray-600">
                On a mission to build products developers love, and along the way, teach the next generation of developers. Here`s a summary of my work so far.
            </p>
            <div className="grid grid-cols-2 gap-4 mx-4 lg:grid-cols-4">
                {tecnologies.map((tecnology) => (
                    <article 
                        key={tecnology.name}
                        className="flex flex-col justify-between items-center w-full h-full p-6 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 "
                    >
                        <Image 
                            alt={tecnology.name}
                            src={`/icons/${tecnology.icon}`}
                            width={42}
                            height={42}
                        />
                        <span>{tecnology.name}</span>
                    </article>
                ))}       
            </div>
        </section>
    );
}