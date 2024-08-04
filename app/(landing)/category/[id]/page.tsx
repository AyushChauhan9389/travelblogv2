import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {db} from "@/app/db/db";
import {categories} from "@/app/db/schema";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {eq} from "drizzle-orm";
import {MainCategoryFetch} from "@/components/fetchcomponents/fetchposts";


export default async function SingleCategoryPage({params}: { params: { id: number } }) {
    const singlecategory = await db.select().from(categories).where(eq(categories.id, params.id));
    const category = await db.select().from(categories)
    return (
        <>
            <div className="mt-4 relative">
                <Image src="/background.svg" alt="category background" width={1980} height={1080}
                       className="aspect-[11/8] overflow-hidden rounded-xl object-cover object-center w-full h-[300px]"/>
                <div
                    className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] rounded-2xl"/>
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-white capitalize">{singlecategory[0].name}</h1>
                    <p className="max-w-xl text-lg sm:text-xl text-white capitalize">{singlecategory[0].description}
                    </p>

                </div>
            </div>
            <div className="flex  flex-col md:flex-row px-2 py-4 gap-3 h-full">
                <div className="w-4/5">
                    <MainCategoryFetch  categoryid={singlecategory[0].id} />
                </div>
                <div className=" w-full md:w-1/5 bg-background flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                        Categories
                        <Link href="/category">
                            <Button variant="outline" size="sm" className="w-fit h-fit border-0 hover:bg-background hover:underline transition">View All</Button>
                        </Link>
                    </div>
                    {category.map((category, index) => (
                        <Link href={`/category/${category.id}`} key={index} className="w-full">
                            <Card
                                className=" p-3 flex justify-between items-center capitalize hover:scale-[1.02] transition">
                                {category.name}
                                <ArrowRight className="w-5 h-5"/>
                            </Card>

                        </Link>
                    ))}

                </div>
            </div>
        </>
    )
}