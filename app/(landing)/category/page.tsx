import Image from "next/image";
import {
    Badge
} from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import {categories} from "@/app/db/schema";
import {db} from "@/app/db/db";
import Link from "next/link";
import {Button} from "@/components/ui/button";


export default async function CategoryPage(){
    const category = await db.select().from(categories);
    return (
        <>
            <div className="mt-4 relative">
                <Image src="/background.svg" alt="category background" width={1980} height={1080}
                       className="aspect-[11/8] overflow-hidden rounded-xl object-cover object-center w-full h-[300px]"/>
                <div
                    className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] rounded-2xl"/>
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-white capitalize">All Categories</h1>
                    <p className="max-w-xl text-lg sm:text-xl text-white capitalize">Explore all categories down below.
                    </p>

                </div>
            </div>
            <div className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {category.map((category, index) => (
                            <div key={index}
                                className="grid gap-4 p-4 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div
                                    className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 h-12">
                                    <Badge className="w-6 h-6"/>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-lg font-semibold">{category.name}</h3>
                                    <p className="text-sm text-muted-foreground">{category.description}</p>
                                </div>
                                <Link href={'/category/'+category.id} className="w-full">
                                    <Button variant='outline' >See All</Button>
                                </Link>
                            </div>

                    ))}

                </div>
            </div>
        </>
    )
}