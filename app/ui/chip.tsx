


export default function Chip({icon, name, color}: {icon: string, name: string, color: string}) {
    return (
        <span className="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2"> 
            { name } 
        </span>
    );
}