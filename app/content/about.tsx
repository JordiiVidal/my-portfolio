import { Section } from '@layout/section';
import { Subtitle, Title } from '@ui/title';
import TextWithLinks from '@ui/text-with-links';
import ButtonLink from '@ui/button-link';

const description = `
    Con [+5 años] de experiencia creando aplicaciones web e híbridas, estoy preparado 
    para dar un salto en mi carrera profesional y enfocarme en mi pasión por [JavaScript] y 
    [TypeScript], me especializo en el framework [Angular]. Me entusiasma trabajar en proyectos 
    innovadores y seguir aprendiendo cada día.
`;

const buttons = [
    {
        text: "Linkedin",
        icon: "buttons/linkedin.svg",
    },
    {
        text: "Github",
        icon: "buttons/github.svg",
    },
    {
        text: "Currículum",
        icon: "buttons/resume.svg",
    },
]

export default function About(){
    return (
       <Section isAfterHeader={true}>
            <Title text='Jordi Vidal Roselló'/>
            <Subtitle text='Full-Stack Developer' />
            <p className="prose prose-neutral dark:prose-invert text-center text-pretty dark:text-gray-400 text-gray-600">
                <TextWithLinks>
                    {description}
                </TextWithLinks>
            </p>
            <div className="my-8 flex flex-row space-x-2 justify-center w-full overflow-x-auto">
                {
                    buttons.map((btn) => (
                        <ButtonLink key={btn.text} text={btn.text} icon={btn.icon}/>
                    ))
                }
            </div>
       </Section>
    );
}