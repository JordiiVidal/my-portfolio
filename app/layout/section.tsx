import { PropsWithChildren } from "react";
import { Subtitle, Title } from "../ui/title";
import TextWithLinks from "../ui/text-with-links";

interface SectionProps extends PropsWithChildren {
    id: string; 
    title: string;
    subtitle?: string;
    description: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, title, description, subtitle}) => {
	return (
        <section 
            id={id}
            className="flex flex-col gap-8 md:mb-48 mb-28"
        >	
            <div className="flex flex-col gap-1">     
                <Title text={title}/>
                { subtitle && <Subtitle text={subtitle} />}
            </div>
            <p className="prose prose-neutral dark:prose-invert text-center dark:text-gray-400 text-gray-600 text-sm tracking-wide leading-6 text-pretty">
                <TextWithLinks>
                    {description}
                </TextWithLinks>
            </p>		
            {children}
		</section>
	);
};