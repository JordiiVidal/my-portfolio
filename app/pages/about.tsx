import { Section } from "@layout/section";
import ButtonLink, { ButtonLinkProps } from "@ui/button-link";

const description = `
    Con [+5 años] de experiencia creando aplicaciones [Web] e [Híbridas], estoy preparado 
    para dar un salto en mi carrera [Profesional] y enfocarme en mi pasión por [JavaScript] y 
    [TypeScript], me especializo en el framework [Angular].
`;

const buttons: ButtonLinkProps[] = [
  {
    text: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jordi-vidal-rosello/",
  },
  {
    text: "Github",
    icon: "github",
    link: "https://github.com/JordiiVidal",
  },
  {
    text: "Currículum",
    icon: "resume",
    link: "documents/resume.pdf",
  },
];

export function About() {
  return (
    <Section
      key="about"
      id="about"
      title="Jordi Vidal Roselló"
      subtitle="Full-Stack Developer"
      description={description}
    >
      <div className="flex flex-col md:flex-row md:justify-center gap-3">
        {buttons.map((btn) => (
          <ButtonLink key={btn.text} {...btn} />
        ))}
      </div>
    </Section>
  );
}
