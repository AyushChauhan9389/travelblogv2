import Header from "@/components/defaultcompo/header";
import Link from "next/link";
import Image from "next/image";
import Customcarousel from "@/components/defaultcompo/customcarousel";
import {ChevronRightIcon} from "lucide-react";
import {FetchCategory, Frontpagefetch} from "@/components/fetchcomponents/frontpagefetch";

export default function Home() {
    return (
        <>
            <main className="md:px-6 md:py-8 h-fit">
                <div className="flex lg:flex-row gap-4 flex-col">
                    <div className="lg:w-2/3 w-full text-white  bg-cover bg-no-repeat relative ">
                        <div className="h-full flex flex-col justify-between ">
                            <h1 className="text-foreground text-3xl font-medium h-1/5">Featured Blogs</h1>
                            <Frontpagefetch/>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full text-white flex lg:flex-col gap-4 flex-row h-[200px] lg:h-[600px]">
                        <FetchCategory />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <h1 className="text-3xl font-sans font-bold text-black">
                        Featured Blogs
                    </h1>
                    <Link href="/blog" className="flex flex-row items-center justify-start hover:underline">
                        See All <ChevronRightIcon className="w-4 h-4 "/>
                    </Link>
                </div>

                <Customcarousel/>
            </main>

        </>
    );
}
