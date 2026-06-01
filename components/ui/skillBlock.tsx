

type Skill = {
    title: string,
    list: string[]
}

export default function SkillBlock({title, list}: Skill){
    return (
        <div className="p-4 bg-card text-card-foreground border-border border shadow-border shadow-md/50 rounded-sm">
            <h2 className="text-xl">{title}</h2>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {list.map(skill =>(
                    <div key={skill} className="px-5 py-1 bg-secondary text-secondary-foreground rounded-sm w-fit">
                    <p>{skill}</p>
                </div>
                ))}
            </div>
        </div>
    )
}