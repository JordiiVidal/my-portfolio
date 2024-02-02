import Title from '@ui/title';

export default function Work(){
    return (
        <section className='pt-6 lg:pt-12 flex flex-col gap-6'>
            <Title text='Work Experience'/>
            <p className="prose prose-neutral dark:prose-invert text-center text-pretty dark:text-gray-400 text-gray-600">
                On a mission to build products developers love, and along the way, teach the next generation of developers. Here`s a summary of my work so far.
            </p>
        </section>
    );
}