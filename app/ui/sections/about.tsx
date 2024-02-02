import Title from '@ui/title';
import ExternalLink from '@ui/external-link';

export default function About(){
    return (
        <section className='pt-6 lg:pt-12 flex flex-col gap-6'>
            <Title text='Jordi Vidal Roselló'/>
            <p className="prose prose-neutral dark:prose-invert text-center text-pretty dark:text-gray-400 text-gray-600">
                I`m a Full-Stack Developer, optimist, and community builder. I currently 
                <ExternalLink text='Angular' icon='angular.png'/>
                as the VP of Product at  community, an open-source web framework built with
                <ExternalLink text='Node.js' icon='node.png'/>
            </p>
        </section>
    );
}