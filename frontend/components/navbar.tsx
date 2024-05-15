import Image from "next/image";
import Link from "next/link";


export default function Navbar(){
    return (
        <div className="bg-black sticky z-[100] !pb-8 font-mono flex flex-row w-full items-center justify-between top-0 py-16">
            <Link href={'/'} className="flex items-center space-x-4 group/logo">
                <Image className="!fill-white group-hover/logo:!fill-teal-500 group-hover/logo:scale-125 group-hover/logo:rotate-180 transition-transform" src={"/Focusly.svg"} alt={"Focusly Logo"} width={50} height={50}/>
                <p className="text-center group-hover/logo:text-primary justify-center text-2xl">Focus<span className=" underline decoration-accent">ly</span></p>
            </Link>
            <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button" aria-expanded="false" aria-controls="navbar-default" data-collapse-toggle="navbar-default">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <ul className="hidden md:flex md:flex-row md:space-x-5 " id="navbar-default">
                <li>
                    <Link className="transition-all hover:bg-slate-800 hover:text-primary px-5 py-2 rounded-xl" aria-current="page" href={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="transition-all hover:bg-slate-800 hover:text-primary px-5 py-2 rounded-xl" href={"/about"}>About</Link>
                </li>
                <li>
                    <Link className="transition-all hover:bg-slate-800 hover:text-primary px-5 py-2 rounded-xl" href={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                    <Link className="transition-all hover:bg-slate-800 hover:text-primary px-5 py-2 rounded-xl" href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}