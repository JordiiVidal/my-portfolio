import { Section } from '@layout/section';
import ExternalLink from '@ui/external-link';
import { Subtitle, Title } from '@ui/title';

export default function About(){
    return (
       <Section isAfterHeader={true}>
            <Title text='Jordi Vidal Roselló'/>
            <Subtitle text='Full-Stack Developer' />
            <p className="prose prose-neutral dark:prose-invert text-center text-pretty dark:text-gray-400 text-gray-600">
                I`m a Full-Stack Developer, optimist, and community builder. I currently 
                <ExternalLink text='Angular' icon='angular.png'/>
                as the VP of Product at  community, an open-source web framework built with
                <ExternalLink text='Node.js' icon='node.png'/>
            </p>
       </Section>
    );
}