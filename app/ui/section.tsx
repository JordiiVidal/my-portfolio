import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
    isAfterHeader?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, isAfterHeader = false}) => {
	return (
        <section className={`py-24 justify-center flex flex-col gap-6 ${isAfterHeader ? 'mt-20' : ''}`}>			
            {children}
		</section>
	);
};