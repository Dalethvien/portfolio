

type Skill = {
    title: string,
    list: string[]
}

export default function SkillBlock({title, list}: Skill){
    return (
        <div className="border-fuchsia-800 border-2 p-4">
            <h2 className="text-xl">{title}</h2>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {list.map(skill =>(
                    <div className="px-5 py-1 border-indigo-800 border-2 rounded-md w-fit">
                    <p>{skill}</p>
                </div>
                ))}
            </div>
        </div>
    )
}