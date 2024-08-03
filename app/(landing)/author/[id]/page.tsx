import Link from "next/link";
import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {db} from "@/app/db/db";
import {and, eq} from "drizzle-orm";
import {posts, users} from "@/app/db/schema";
import {Button} from "@/components/ui/button";

export default async function AutherPage({params}: { params: { id: number } }) {
    const userdata = await db.select().from(users).where(eq(users.id, params.id))
    const postbyusers = await db.select().from(posts).where(and(eq(posts.authorId, params.id), eq(posts.ispublished, true)))
    return (
        <div className="bg-background text-foreground">
            <header className="px-4 py-6 md:px-6 md:py-12 bg-muted rounded-2xl">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    <Avatar className="w-24 h-24 md:w-32 md:h-32">
                        <AvatarImage src="/placeholder-user.jpg" alt="Author Avatar"/>
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold">{userdata[0].username}</h1>
                        <p className="text-muted-foreground">Writer, Blogger, Storyteller
                        </p>
                    </div>
                </div>
            </header>
            <section className="px-2 py-6 md:px-3 md:py-8 w-full mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Published Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {postbyusers.map((post,index) => (
                        <div className="bg-card rounded-lg overflow-hidden shadow-md transition hover:scale-[1.01] " key={index}>
                            <Link href={`/blog/${postbyusers[index].slug}`} prefetch={false}>
                                <Image
                                    src={post.headerimageurl}
                                    alt="Post Thumbnail"
                                    width={400}
                                    height={225}
                                    className="w-full h-48 object-cover"
                                    style={{aspectRatio: "400/225", objectFit: "cover"}}
                                />
                                <div className="p-4 flex flex-row justify-between">
                                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                                    <Link href={`/blog/${postbyusers[index].slug}`}>
                                        <Button className="w-fit h-8">Read More</Button>
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
                <div className="flex justify-center mt-8">
                </div>
            </section>
        </div>
    )
}