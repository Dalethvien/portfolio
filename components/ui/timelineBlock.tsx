
type Event = {
    title: string,
    date: string,
    content: string
}

export default function TimeLineblock(event:Event){
    return(
  <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -inset-s-1.5 border border-white"></div>
    <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{event.date}</time>
    <h3 className="text-lg font-semibold text-primary">{event.title}</h3>
    <p className="mb-4 text-base font-normal text-foreground">{event.content}</p>
  </li>
    )
}

export type {Event}