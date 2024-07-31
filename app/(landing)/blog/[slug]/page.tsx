import {db} from "@/app/db/db";
import {categories, posts, users} from "@/app/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const blog = await db.select().from(posts).where(eq(posts.slug, params.slug))
    const category = await db.select().from(categories).where(eq(categories.id, blog[0].categoryId))
    const author = await db.select().from(users).where(eq(users.id, blog[0].authorId))
    return (
        <div>

            <div className="mt-4 flex flex-row gap-4">
                <div className="h-full w-full relative">
                    <div className="bg-black opacity-80 blur-sm h-full">
                    <Image src={blog[0].headerimageurl} alt="placeholder" width={1500} height={1500}
                           className="aspect-[11/8] overflow-hidden rounded-xl object-cover object-center w-full h-[450px]"/>
                    </div>
                        <div className="absolute top-4 left-4">
                        <span
                            className="px-2 py-1 text-sm bg-background rounded-full text-foreground">{`${blog[0].createdAt.getUTCDate()}-${blog[0].createdAt.getUTCMonth() + 1}-${blog[0].createdAt.getUTCFullYear()}`}</span>
                        <span
                            className="px-2 py-1 ml-2 text-sm bg-background rounded-full text-foreground">{category[0].name}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                        <span
                            className="px-2 py-1 ml-2 text-sm bg-background rounded-full text-foreground">By {author[0].username}</span>
                    </div>
                    <div className="mt-4">
                       <div className="text-3xl capitalize">
                            {blog[0].title}
                       </div>
                        <div className="prose mt-4">
                            <div dangerouslySetInnerHTML={{__html: blog[0].content}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}