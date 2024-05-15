import Image from "next/image";

export default function About(){
    return (
            <div className="flex flex-col md:w-[80%] space-y-20 mt-16 mx-auto items-center text-center justify-center">
                <div className="lg:flex-row flex flex-col items-center justify-center">
                    <Image src="/favicon.ico" alt="aboutimage" width={200} height={200}/>
                    <div className="mx-16">
                        <h1 className=" text-5xl font-sans pb-10">Aditya Gupta</h1>
                        <p className="text-slate-200 font-mono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aliquam assumenda ex iusto modi recusandae sapiente nesciunt at velit, doloribus error odit dolor, alias, repellendus autem doloremque aperiam nisi illo reiciendis corrupti maxime veritatis? Tempore, officia laboriosam voluptates omnis dolorum dolor ratione nam asperiores libero eum non laborum et velit.</p>
                    </div>
                </div>
                <div className="lg:flex-row flex flex-col items-center justify-center">
                    <Image src="/favicon.ico" alt="aboutimage" width={200} height={200}/>
                    <div className="mx-16">
                        <h1 className=" text-5xl font-sans pb-10">John Smith</h1>
                        <p className="text-slate-200 font-mono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aliquam assumenda ex iusto modi recusandae sapiente nesciunt at velit, doloribus error odit dolor, alias, repellendus autem doloremque aperiam nisi illo reiciendis corrupti maxime veritatis? Tempore, officia laboriosam voluptates omnis dolorum dolor ratione nam asperiores libero eum non laborum et velit.</p>
                    </div>
                </div>
            </div>
    )
}