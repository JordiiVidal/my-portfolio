import { PropsWithChildren } from "react";
import { Subtitle, Title } from "../ui/title";
import TextWithLinks from "../ui/text-with-links";

interface SectionProps extends PropsWithChildren {
    id: string; 
    title: string;
    subtitle?: string;
    description: string;
    isAfterHeader?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, title, description, subtitle, isAfterHeader = false}) => {
	return (
        <section 
            id={id}
            className={`px-20 pb-20 justify-center flex flex-col gap-6 ${isAfterHeader ? 'pt-40' : 'pt-20'}`}
        >	
            <Title text={title}/>
            { subtitle && <Subtitle text={subtitle} />}
            <p className="my-8 prose prose-neutral dark:prose-invert text-center text-pretty dark:text-gray-400 text-gray-600">
                <TextWithLinks>
                    {description}
                </TextWithLinks>
            </p>		
            {children}
		</section>
	);
};