import { Reminder } from "@/components/reminder";



export default function Home() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-150px)] items-center">
        <h1 className="text-5xl/relaxed max-w-[60%] font-mono">Welcome to <span className="underline underline-offset-4 decoration-accent text-highlight">Focus<span className=" text-primary">ly</span></span> - The <span className="bg-highlight text-accent px-2">Ultimate</span> Reminders Experience.</h1>
      </div>
      <div className=" space-y-5 pointer-events-none">
        <h1 className="text-3xl/relaxed max-w-[60%] font-mono">Setting <span className="underline underline-offset-4 decoration-accent text-highlight">Reminders</span></h1>
        <div className="grid grid-cols-3 gap-4">
          <Reminder title="Helu" items={["first ahjk askjhdka daksjhda dkajshdka dashdkaj kjahsda smdnabksdjba a","second","third","first","second","third","first","second","third","first","second","third"]} color="bg-primary"></Reminder>
          <Reminder title="Helu" items={["first","second"]} color="bg-accent"></Reminder>
        </div>
        <br />
      </div>
    </>
  );
}
