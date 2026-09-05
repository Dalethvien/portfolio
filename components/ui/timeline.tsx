import {timeline} from "../../lib/timeline";
import TimeLineblock from "./timelineBlock";
export default function TimeLine(){
    return(
        <div className="scroll-mt-16 py-16" id="Parcours">
            <h1 className="text-3xl">Parcours</h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {timeline.map(event=>(
                    <TimeLineblock key={event.title} {...event} />
                ))}
            </ol>
        </div>
        
    )
}