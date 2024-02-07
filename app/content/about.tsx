import { Section } from '@layout/section';
import ButtonLink, { ButtonLinkProps } from '@ui/button-link';

const description = `
    Con [+5 años] de experiencia creando aplicaciones web e híbridas, estoy preparado 
    para dar un salto en mi carrera profesional y enfocarme en mi pasión por [JavaScript] y 
    [TypeScript], me especializo en el framework [Angular]. Me entusiasma trabajar en proyectos 
    innovadores y seguir aprendiendo cada día.
`;

const buttons: ButtonLinkProps[] = [
    {
        text: "Linkedin",
        icon: "buttons/linkedin.svg",
        link: "https://www.linkedin.com/in/jordi-vidal-rosello/",

    },
    {
        text: "Github",
        icon: "buttons/github.svg",
        link: "https://github.com/JordiiVidal",
    },
    {
        text: "Currículum",
        icon: "buttons/resume.svg",
        link: "resume.pdf"
    },
]

export default function About(){
    return (
       <Section 
            id="about"
            title='Jordi Vidal Roselló'
            subtitle='Full-Stack Developer'
            description={description}
        >
            <div className="flex flex-col md:flex-row md:justify-center gap-3">
                {
                    buttons.map((btn) => (
                        <ButtonLink key={btn.text} {...btn}  />
                    ))
                }
            </div>
       </Section>
    );
}