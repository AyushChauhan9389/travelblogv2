import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {db} from "@/app/db/db";
import {posts} from "@/app/db/schema";
import {eq} from "drizzle-orm";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import ContentForm from "@/components/defaultcompo/content-form";
import EditContentForm from "@/components/defaultcompo/editcontent-form";

export default async function Editpage({ params }: { params: { id: number } }){
    const blog = await db.select().from(posts).where(eq(posts.id, params.id))
    return (
        <div className="px-6 py-4">
            <h1 className="text-3xl font-sans font-bold"></h1>
            <div className="flex flex-row justify-between items-center">
                <Breadcrumb className="hidden md:flex mt-3">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/" prefetch={false}>
                                    Dashboard
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Posts</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Edit</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage>{blog[0].slug}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="mt-4">
                <Card className="w-full">
                        <EditContentForm contentset={blog[0].content} slugset={blog[0].slug} titleset={blog[0].title} idset={blog[0].id}/>
                </Card>
            </div>
        </div>
    )
}