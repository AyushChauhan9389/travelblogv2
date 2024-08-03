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
import {categories, posts} from "@/app/db/schema";
import {eq} from "drizzle-orm";
import {Card} from "@/components/ui/card";
import EditContentForm from "@/components/defaultcompo/editcontent-form";
import {Allowedtoedit} from "@/lib/AdminControl";

export default async function Editpage({ params }: { params: { id: number } }){
    const blog = await db.select().from(posts).where(eq(posts.id, params.id))
    const isallowed =  await Allowedtoedit({autherId: blog[0].authorId})
    const category = await db.select().from(categories);
    if(!isallowed){
        return null
    }
    return (
        <div className="px-6 py-4">
            <h1 className="text-3xl font-sans font-bold"></h1>
            <div className="flex flex-row justify-between items-center">
                <Breadcrumb className="hidden md:flex mt-3">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/dashboard" prefetch={false}>
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
                        <EditContentForm categories={category} contentset={blog[0].content} slugset={blog[0].slug} titleset={blog[0].title} idset={blog[0].id} discriptionset={blog[0].description} categoryset={blog[0].categoryId} />
                </Card>
            </div>
        </div>
    )
}