import Header from "@/components/defaultcompo/header";
import Link from "next/link";
import Image from "next/image";
import Customcarousel from "@/components/defaultcompo/customcarousel";
import {ChevronRightIcon} from "lucide-react";

export default function Home() {
    return (
        <>
        <Header />
            <main className="px-6 py-8 h-fit">
                <div className="flex md:flex-row gap-4 flex-col">
                    <div className="md:w-2/3 w-full text-white  bg-cover bg-no-repeat relative h-[600px]">
                        <Image src="/placeholder.svg" alt="placeholder" width={500} height={500}
                               className="aspect-[11/8] overflow-hidden rounded-xl object-cover object-center w-full h-full"/>
                        <div className="absolute top-4 left-4">
                            <span className="px-2 py-1 text-sm bg-black rounded-full">Date</span>
                            <span className="px-2 py-1 ml-2 text-sm bg-black rounded-full">Category</span>

                        </div>
                        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg">
                            <span className="px-2 py-1 text-sm bg-gray-700 rounded-full">Category</span>
                            <h3 className="mt-2 text-xl font-bold text-black">
                                POST NAME
                            </h3>
                        </div>
                    </div>
                    <div className="md:w-1/3 w-full text-white flex md:flex-col gap-4 flex-row h-[200px] md:h-[600px]">
                        <div className="aspect-video md:aspect-auto md:flex-1 relative w-full h-48">
                            <Image src="/placeholder.svg" alt="placeholder" fill
                                   className="rounded-xl object-cover object-center"/>
                            <div className="absolute top-4 left-4">
                                <span className="px-2 py-1 text-sm bg-black rounded-full">Date</span>
                                <span className="px-2 py-1 ml-2 text-sm bg-black rounded-full">Category</span>

                            </div>
                        </div>
                        <div className="aspect-video md:aspect-auto md:flex-1 relative w-full h-48">
                            <Image src="/placeholder.svg" alt="placeholder" fill
                                   className="rounded-xl object-cover object-center"/>
                            <div className="absolute top-4 left-4">
                                <span className="px-2 py-1 text-sm bg-black rounded-full">Date</span>
                                <span className="px-2 py-1 ml-2 text-sm bg-black rounded-full">Category</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <h1 className="text-3xl font-sans font-bold text-black">
                        Featured Blogs
                    </h1>
                    <Link href="/posts" className="flex flex-row items-center justify-start hover:underline">
                        See All <ChevronRightIcon className="w-4 h-4 "/>
                    </Link>
                </div>

                <Customcarousel/>
            </main>

        </>
    );
}
