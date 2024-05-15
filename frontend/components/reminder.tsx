type reminderType = {
    title: string,
    items: string[],
    color: string,
}



export const Reminder = ({title, items, color}:reminderType) => {
    return (
        <div className={`${color} aspect-auto flex flex-col text-black min-h-[300px] space-y-8 p-5`}>
            <h1 className=" font-bold text-2xl font-mono tracking-tighter">{title}</h1>
            <ul className="font-semibold font-mono">
              {items.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
          </div>
    )
}